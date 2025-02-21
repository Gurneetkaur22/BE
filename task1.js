const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use((req,res,next)=>{
    const logDetails = {
        timestamp: new Date().toISOString(),
        ip: req.ip,
        url: req.originalUrl,
        protocol: req.protocol,
        method: req.method,
        hostname: req.hostname,
    };

    const logstring = JSON.stringify(logDetails) + '\n';
    const logfilepath = path.join(__dirname,'requests.log');
    fs.appendFile(logfilepath,logstring,(err)=>{
        if(err){
            console.log('Error writing to log file',err);
        }
    });
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the Express Logging Application!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});