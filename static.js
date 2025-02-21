// static routing
const express=require ('express');
const app = express();

// static routes
app.get('/home',(req,res)=>{
    res.send('Welcome to home page!');
});

app.get('/about',(req,res)=>{
    res.send('Welcome to About page');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});