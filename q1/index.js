const express= require('express');
const app= express();
const cParser=require('cookie-parser');
app.use(cParser());
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.json());
app.use(express.urlencoded());

const port=3000;
app.listen(3000,(req,res)=>
{
    console.log("Server is running...");
});

app.get("/",(req,res)=>{
      res.render("input",{cookies: req.cookies});
})

app.post("/addCookie",(req,res)=>{
   let key= req.body.key;
   let value= req.body.value;

   if(req.cookies.key && req.cookies.value)
   {
    console.log(req.cookies.key);
    console.log(req.cookies.value);
   }

   res.cookie("key",key);
   res.cookie("value",value);
   res.redirect(303,"/");

})
