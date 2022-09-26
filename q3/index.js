const express = require('express');
const app = express();
const router = express.Router();
const session=require('express-session');
const path = require('path');
app.use(session(
    {
        secret: "some secret"
    }
));

app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

const Product = require('./product');

app.listen(3000);
app.get("/", (req, res) => {
   
    let pList = Product.getAllProducts();
    res.render('product', { products : pList});
});

app.post("/addToCart", (req, res) => {
    Product.addToCart(req.body.id);
    const cart=Product.getCart();
    req.session.cart=cart;    
    res.redirect(303, '/cart');
});

app.get("/cart",(req, res) =>{

   // let products=Product.getCart();
   let products= req.session.cart;  
    res.render("shoppingcart",
    {
        products
    }
    )
});
