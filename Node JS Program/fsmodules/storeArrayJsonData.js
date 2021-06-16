let fs = require("fs");

let employees = [];
let emp1 = {id:100,fname:"Ravi",age:21};
let emp2 = {id:101,fname:"Ramesh",age:22};
let emp3 = {id:102,fname:"Rajesh",age:23};

employees.push(emp1);
employees.push(emp2);
employees.push(emp3);

let employeesString = JSON.stringify(employees);
fs.writeFile("empInfo.json",employeesString,(err)=> {
    if(!err){
        console.log("REcord stored successfully ")
    }
})