const productCatalog = [
    {
        id:0,
        name:"chocolate",
        price: 1,
        description:"Chocolate is a food made from roasted and ground cacao seed kernels that is available as a liquid, solid, or paste, either on its own or as a flavoring agent in other foods. Cacao has been consumed in some form since at least the Olmec civilization (19th-11th century BCE),[1][2] and the majority of Mesoamerican people ─ including the Maya and Aztecs ─ made chocolate beverages.",
        imagePath: "https://m.media-amazon.com/images/I/718aRp2IHVL._SX679_.jpg"
    },
    {
        id:1,
        name:"notebook",
        price: 2,
        description:"A notebook (also known as a notepad, writing pad, drawing pad, or legal pad) is a book or stack of paper pages that are often ruled and used for purposes such as note-taking, journaling or other writing, drawing, or scrapbooking.",
        imagePath: "https://m.media-amazon.com/images/I/71dE9OTSYjL._AC_SX679_.jpg"
    },
    {
        id:2,
        name:"dress",
        price: 10,
        description:"Certain pieces define each season: cozy knitwear in fall, exquisite outerwear for winter. In the heat, it’s undoubtedly any one of the best floral dresses for women: a meadowy wildflower print, a bold blooming pattern, or something more dainty. Just ahead of fall, you’ll get plenty of wear out of a new style or two—we’re sure a few more parties, alfresco dinners, or an end-of-season vacation is on the docket. So, why not seek out a new style or two to ensure a stylish floral moment, be it a leg-baring mini, sweeping maxi, or versatile midi to carry you through the workweek and weekend? Even better, you can transition your favorites to cooler weather with the swap of accessories or an extra layer.",
        imagePath:"https://m.media-amazon.com/images/I/71SIDX2LK+L._AC_UX679_.jpg"
    },
    {
        id:3,
        name:"phone",
        price: 600,
        description:"A mobile phone, cellular phone, cell phone, cellphone, handphone, hand phone or pocket phone, sometimes shortened to simply mobile, cell, or just phone, is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area",
        imagePath:"https://images-na.ssl-images-amazon.com/images/I/71bK3oKRCOL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    }    
];

let cart = []; // {product: {product}, qty: 0}

class Product
{
    constructor(id,name,price,description,imagePath)
    {
        this.id=id;
        this.name=name;
        this.price=price;
        this.description=description;
        this.imagePath=imagePath;
    }

    
    static getAllProducts() 
    {
        return productCatalog;
    }

    static getProductById(id) 
    {
        return productCatalog[id];
    }

    static addToCart(id) 
    {
        // check if order is already in cart, and increase its qty in cart
        const order = cart.find(ord => ord.product.id === parseInt(id));
        if (order) {
            order.qty += 1;
        } else { // otherwise add it into cart
            cart.push({
                product: productCatalog[parseInt(id)],
                qty: 1
            });
        }
    }

    static removeItemFromCart(id) 
    {
        cart = cart.filter(ord => ord.product.id !== parseInt(id));
    }

    static getCart() 
    {
        return cart;
    }
}

module.exports=Product;