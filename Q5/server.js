const fs = require('fs')

fs.readFile("./mydata.txt", function(err, data){
    if(err)
        console.log("Error occured", err)
    else{
        const wordCount = data.toString().split(/\s+/).length;
        console.log("Number of Words in mydata.txt = "+wordCount)
    }
} )

fs.readFile("./myfile.data", function(err, data){
    if(err)
        console.log("Error occured", err)
    else{
        const wordCount = data.toString().split(/\s+/).length;
        console.log("Number of Words myfile.txt = "+wordCount)
    }
})
