let chai = require("chai").expect;

let name="Ravi Kumar";

let num = [100,200,300,400,500];
let emp = {id:100,name:"Ramesh",age:21};

chai(name).to.be.a("string");
chai(name).to.equal("Ravi Kumar");
chai(name).to.have.length(10);
chai(num).to.be.an("array");
chai(num).to.be.length(5);
chai(num).to.be.that.include(200);
chai(emp).to.have.property("id").to.be.equal(100);
chai(emp).to.have.property("name").to.be.equal("Ramesh");
chai(emp).to.have.property("age").to.be.greaterThan(20);