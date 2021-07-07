let op = require("../src/operation");
let chai = require("chai").should();

xdescribe("Operation Testing",()=> {
    xit("addition of two number test",()=> {
        let result = op.add(10,20);
        result.should.equal(30);
    })

    xit("checking login function testing",()=> {
        let result = op.checkLoginDetails("Ramesh","123");
        result.should.equal("success");
    })

    it("check even or odd function testing",()=> {
        let result = op.checkEvenAndOdd(10);
        result.should.be.a("number");
        //result.should.be.a("string");
    })
})