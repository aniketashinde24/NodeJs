const http = require('http')

http.createServer(function(req,resp){
    resp.write("Welcome to Node.js")
    resp.end()
}).listen(5000, function(){
    console.log("Server is running on port http://localhost:5000/")
})