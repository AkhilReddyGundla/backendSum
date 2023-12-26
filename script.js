const express =require('express')
const cors = require('cors')
const app = express();
const env = require('dotenv').config
app.use(cors())
app.get('/add',function(req,res){
    let num1 = req.query.num1;
    let num2 = req.query.num2;
    try{
        num1 = parseInt(num1);
        num2 = parseInt(num2)
        const result = num1+num2;
        res.send({
            "Result": result,
        })
    }catch(e){
        throw e;
    }
})
app.use(function (err,req,res,next){
    if(err){
        throw err;
    }
})
app.listen((process.env.PORT)|| 8080)