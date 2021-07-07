let chai = require("chai").should();
let name = "Ravi";
let num=100;

let numArray = [10,20,30,40,50];

name.should.be.a("string");
num.should.be.a("number");
numArray.should.be.a("array");
name.should.equal("Ravi");
numArray.should.have.length(5);
