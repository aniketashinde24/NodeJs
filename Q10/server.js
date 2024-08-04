const express = require('express')
const app = express();

const bodyparser = require('body-parser')
const m1 = require('./module')

app.use(bodyparser.urlencoded({extended:false}));

app.get("/", function(req, resp){
    resp.sendFile("/index.html",{root:__dirname});
})

app.post("/ifPrime", function(req, resp){
    var num = req.body.num;
    if(m1.ifPrime(num) === true)
        resp.send("Prime");
    else
        resp.send("Not Prime");
})

app.listen(3000,function(){
    console.log("Server open at http://localhost:3000")
})