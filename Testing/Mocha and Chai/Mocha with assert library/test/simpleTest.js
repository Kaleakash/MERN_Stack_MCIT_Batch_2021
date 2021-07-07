var expect = require("assert");
var obj = require("../src/info");

describe("Simple Testing",()=>{

    it("equal testing",()=> {
        expect.equal(10==10,true,"both must be equal")
    })

})


describe("info funtion testing",()=> {
    it("gender greet function ",()=> {
        let result = obj.greet("Raj","Male")
        expect.equal(result,"Mr Raj","Mr Prefix added...");
        let result1 = obj.greet("Seeta","Female");
        expect.equal(result1,"Miss Seeta","Miss Prefix added...");
    })
})