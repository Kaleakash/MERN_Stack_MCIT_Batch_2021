let util = require("util");
util.log("Welcome to Node JS using Util Module")
let id =100;
let name ="Ravi";
let salary = 12000;
let emp = {"id":100,"name":"Ramesh","salary":12000}
console.log(util.format("Id is %d, Name is %s and salary is %f",id,name,salary));
console.log(util.format("Employee details are %j",emp))