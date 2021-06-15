let fs = require("fs");
fs.readFile("demo.txt",(err,data)=>{
    if(!err){
        console.log(data.toString());
    }
})
console.log("Normal Statement1")
console.log("Normal Statement2")
console.log("Normal Statement3")