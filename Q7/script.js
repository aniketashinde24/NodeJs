const fs = require('fs')
const readline = require('readline')

let rl = readline.createInterface({
    input:fs.createReadStream("myfile.txt"),
})

var linenum = 0;
rl.on("line", function(data){
    linenum++;
    console.log(linenum + "--->" + data)
})