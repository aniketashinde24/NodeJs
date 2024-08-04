//for importing builtin modules do not use relative path
const fs=require("fs");
console.log("before readfilesync")
//it will return the data read from the file
var data=fs.readFileSync("./myfile.txt");
console.log("data from file")
console.log(data)
fs.writeFileSync("mycopy.txt",data)
console.log("after writefilesync")