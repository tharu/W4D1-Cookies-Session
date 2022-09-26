const express = require('express');
const app = express();
const router=express.Router();
const session= require('express-session');
const path = require('path');
app.use(session(
    {
        secret: "some secret"
    }
));

// Read post body params
app.use(express.json());
app.use(express.urlencoded());

app.use("/css", express.static(path.join(__dirname, 'css')));



app.get('/', (req, res) => {
     
    const date = new Date();
    const hour = date.getHours();
    const cssFile = hour >= 6 && hour <= 18 ? 'day.css' : 'night.css';
 res.send(`<html>
 <head>
     <meta charset="UTF-8">
     <title>User Info</title>
     <link href="/css/${cssFile}" rel="stylesheet"/>
 </head>
 <body>
     <div>
         <form action="/result" method="post">
             Name : <input type="text" id="txtName" name="name"/>
             Age : <input type="text" id="txtAge" name="age"/>
             <input type="submit" value="Submit"/>
         </form>
     </div>
 </body>
</html>
`);
});
app.listen(3000);


app.post("/result",(req, res) =>{
 
    const {name, age} = req.body; 
    req.session.name=name;
    req.session.age=age;
    res.redirect(`/output`);
});



app.get("/output",(req, res) =>{
 
    let name = req.session.name;
    let age=req.session.age;
   
   res.send(`<h1>Welcome ${name} age ${age} </h1>`);
});



