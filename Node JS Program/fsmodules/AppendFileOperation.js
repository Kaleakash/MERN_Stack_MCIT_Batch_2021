let fs = require("fs");
let message = "Welcome to Append file function";
fs.appendFile("demo3.txt",message,(err)=> {
    if(!err){
        console.log("Store data in file")
    }
})
console.log("done!")