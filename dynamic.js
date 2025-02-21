const express = require('express');
const app=express();

// middleware use
app.use((req,res,next)=>{
    console.log('Middleware 1');
    console.log('Request URL:',req.url);
    console.log('Request Method:',req.method);
    console.log('Request Time:',new Date());
    console.log('Request IP:',req.ip);
    next();
});

// dynamic routes
app.get('/user/:id',(req,res)=>{
    const userId=req.params.id;
    res.send(`User Id: ${userId}`);
});

app.get('/product/:category/:id',(req,res)=>{
    const category=req.params.category;
    const productId=req.params.id;
    res.send(`Category: ${category}, Produc Id: ${productId}`);
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});