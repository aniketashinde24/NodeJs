const http = require('http')
const fs = require('fs')
const url = require('url')
const m1 = require('./mymodule')

var server = http.createServer(function(req,res){
    // res.write('Hello World!'); //write a response to the client
    // res.end();
    // console.log(req.url)
    res.writeHeader(200,{'content-type':'text/html'})
    let q = url.parse(req.url,true)
    // console.log(q)

switch (q.pathname) {
    case '/':
        let rs= fs.createReadStream("./index.html")
        rs.pipe(res)
        break;
    case '/result':
        // res.write(""+m1.factorial(q.query.num)) //first argument should be a string(chunk), therefore "" used
        if(q.query.num<5){
            res.write("<h3>Number:"+q.query.num +"<br>Factorial: "+ m1.factorial(q.query.num) + "</h3>")    
            res.end()
        }
        else if(q.query.num>=5 && q.query.num<10){
            res.write("<h3>Number:"+q.query.num +"<br>Table:<br>"+ m1.printTable(q.query.num) + "</h3>")
            res.end()
        }
        else{
            res.write("<h3>Number:"+q.query.num +"<br>The Number is: "+ m1.primeNo(q.query.num) + "</h3>")
            res.end()
        }
        break;
        
        default:
            res.write('404 Page Not Found'); 
            res.end()
        break;
}

}).listen(3000)
console.log("Server is running at http://localhost:3000");
