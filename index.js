const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const data = require('./data.json');
require('dotenv').config();
app.use(express.json());
function middlewaretest(){
    return (req,res,next)=>{
        console.log('i am middleware here');
        next()
    }
}
app.get('/',middlewaretest(),(req,res)=>{
    res.send('hello ,i am romeo')
})

app.get('/member',(req,res)=>{
    res.send(data)
})

app.listen(port,()=>{
    console.log(`listening on http://localhost:${port}`)
})