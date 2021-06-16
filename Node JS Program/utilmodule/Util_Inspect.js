let util = require("util");
let fs = require("fs");
let id = 100;
let emp = {empId:100,namr:"Ravi",salary:12000}
console.log(util.inspect(id));
console.log(util.inspect(emp))

console.log(util.inspect(fs))