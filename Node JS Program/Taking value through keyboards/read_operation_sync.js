let obj = require("readline-sync");
var id = obj.questionInt("Enter the id")
var name = obj.question("Enter the name")
var salary = obj.questionFloat("Enter the salary")
var emailId = obj.questionEMail("Enter your email Id")
console.log("Your id is "+id)
console.log("Your name is "+name)
console.log("Your salary is "+salary)
console.log("Your email id "+emailId)