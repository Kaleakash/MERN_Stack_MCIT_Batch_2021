// core module 
let fs = require("fs");
var message = "Welcome Again Again ";
fs.writeFileSync("demo1.txt",message)
//fs.writeFileSync("demo1.txt",message,{flag:"a+"});
console.log("Store data in file")
console.log("normal statement 1")
console.log("normal statement 2")
console.log("normal statement 3")