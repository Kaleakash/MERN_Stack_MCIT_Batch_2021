let fs = require("fs");
let message  = "Welcome to Asynchrnous Write Operation ";
/*fs.writeFile("demo2.txt",message,error=>{
    if(!error){
        console.log("Data Stored in file succesfully...")
    }
});*/
fs.writeFile("demo2.txt",message,{flag:"a+"},error=>{
    if(!error){
        console.log("Data Stored in file succesfully...")
    }
});
console.log("Normal Statement 1")
console.log("Normal Statement 2")
console.log("Normal Statement 3")