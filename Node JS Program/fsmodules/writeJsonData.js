let fs = require("fs");

//object literal 
let customerObject = {custId:100,cname:"Ravi",age:21};
// we have to convert object to string 
let customerString = JSON.stringify(customerObject);
fs.appendFile("customer.json",customerString,(err)=> {
    if(!err){
        console.log("Record stored in file successfully...")
    }
}) 