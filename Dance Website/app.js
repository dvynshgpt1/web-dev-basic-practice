const express = require("express");
const app = express();
const fs = require("fs");
const port = 80;
const path = require('path');

//  EXPRESS SPECIFIC STUFF
app.use('/static' , express.static('static'));    // for serving the static files
app.use(express.urlencoded({extended:true}));
app.use(express.json());
 


// PUG SPECIFIC STUFF
app.set('view engine' , 'pug');   // set the template engine as pug
app.set('template' , path.join(__dirname , 'views'));   // set the views directory

// ENDPOINTS
app.get('/', (req  ,res) =>{
   const con= "this is best content on internet"
   const params= {'title' : 'pubg is best game', 'content': con}
   res.status(200).render('index.pug' , params)
});

app.post('/', (req  ,res) =>{
   console.log(req.body);
   const params= {'message' : 'your form has submitted successfully'};
   res.status(200).render('index.pug' , params);
});

// START THE SERVICE 
app.listen(port , ()=>{
    console.log(`the application  successfully at port ${port}`);
});