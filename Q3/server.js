// const cir = require('./circle')
// const rec= require('./rectangle')
// const tri = require('./triangle')

// const readline = require('readline-sync')

// let radius = readline.question("Enter the Radius for Circle: ")
// console.log("Area of Circle = "+cir.calcArea(radius).toFixed(2))
// console.log("Circumference of Circle = "+cir.calcCircumference(radius).toFixed(2))
// console.log("Diameter = "+cir.calcDiameter(radius).toFixed(2))

// let length = readline.question("Enter the Length for Rectangle: ")
// let breadth = readline.question("Enter the Breadth for Rectangle")
// console.log("Area of Rectangle = "+rec.calcArea(length, breadth).toFixed(2))
// console.log("Perimeter of Rectangle = "+rec.calcPerimeter(length, breadth).toFixed(2))

// let side = readline.question("Enter the side for Triangle: ")
// console.log("Triangle is "+tri.isEquilateral(side))
// console.log("Perimeter of Triangle = "+tri.calcPerimeter(side).toFixed(2))

const http = require('http')
const fs = require('fs')
const express = require('express')
const bodyparser = require('body-parser')

const app = express();

const m1 = require('./modules/circle')
const m2 = require('./modules/rectangle')
const m3 = require('./modules/triangle')

app.use(bodyparser.urlencoded({extended:false}))

app.get("/", function(req, resp){
    resp.sendFile("./public/index.html",{root: __dirname})
})

app.post("/shape", function(req, resp){
    console.log(req.body.radius)
    if(req.body.btn === 'circle'){
        resp.sendFile("./public/circle.html",{root: __dirname})
        app.post("/result", function(req, resp){
            resp.send(`Area = ${m1.calcArea(req.body.radius)} <br>
            Circumference = ${m1.calcCircumference(req.body.radius)}`)
        })
    }
    else if(req.body.btn === 'rectangle'){
        resp.sendFile("./public/rectangle.html",{root: __dirname})
        console.log(req.body.rec)
        app.post("/result", function(req, resp){
            resp.send(`Area = ${m2.calcArea(req.body.length/1, req.body.breadth/1)} <br> 
            Perimeter = ${m2.calcPerimeter(req.body.length/1, req.body.breadth/1)}`)
        })
    }
    else {
        resp.sendFile("./public/triangle.html",{root: __dirname})
        app.post("/result", function(req, resp){
            resp.send(`isEquilateral = ${m3.isEquilateral(req.body.side1,req.body.side2, req.body.side3)} <br>
            Perimeter = ${m3.calcPerimeter(req.body.side1/1, req.body.side2/1, req.body.side3/1)}`)
        })
    }
})

app.listen(3000, function(){
    console.log("Server is running on port http://localhost:3000")
})