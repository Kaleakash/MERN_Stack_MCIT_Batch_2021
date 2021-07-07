let op = require("../src/operationAsync");
let chai = require("chai").should();

describe("Testing for Asynchronous operation",()=> {
    it("simple addition function testing using ES5 style",()=>{
        op.add(100,200).then(result=> {
                result.should.be.equal(300);
        }).catch(error=>console.log(error))
    })

    it("simple addition function testing using ES7 style", async()=> {
        let result = await op.add(10,20);
        result.should.be.equal(30);
    })
})