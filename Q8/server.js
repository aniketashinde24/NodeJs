const m1 = require('../Q3/circle')

const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const { text } = require('stream/consumers');

app.use(bodyparser.urlencoded({extended:false}));

app.get("/", function(req, resp){
    resp.sendFile("./index.html", {root: __dirname})
})

app.post("/result", function(req, resp){
    var radius = req.body.radius;
    const area = m1.calcArea(radius).toFixed(2);
    const circum = m1.calcCircumference(radius).toFixed(2);
    resp.send(`Area = ${area} <br> Circumference = ${circum}`)
})

app.listen(3000, function(){
    console.log("Server is running on port http://localhost:3000")
})