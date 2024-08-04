const http = require('http')
const url = require('url')
const fs = require('fs')
const m1 = require('./module')

const server =  http.createServer(function(req, resp){
    var q = url.parse(req.url, true)
    resp.writeHeader(200, {'content-type':'text/html'})

    switch(q.pathname){
        case '/':
            var rs = fs.createReadStream("./public/login.html")
            rs.pipe(resp);
            break;
        
        case "/userValidation":
            const username = q.query.uname;
            const password = q.query.pword;
            if(m1.validateLogin(username,password)!==null){
                var rs1 = fs.createReadStream('./public/success.html')
                rs1.pipe(resp)
            }
            else{
                var rs2 = fs.createReadStream('./public/failure.html')
                rs2.pipe(resp)
            }
            break;
        
        default: {
            resp.write("404! Error")
            break;
        } 
    }
})

server.listen(3001,function(){
    console.log("Server is running on port http://localhost:3001")
})