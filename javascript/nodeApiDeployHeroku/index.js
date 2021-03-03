const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.json(require('./data.json'))
})

app.listen(process.env.PORT||5000,()=>console.log(`server is runing on port 5000`))