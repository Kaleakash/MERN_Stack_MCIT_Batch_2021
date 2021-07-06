
var obj = require("../src/info")



describe("Info file testing",()=> {
    it("sayHello funtion testing",()=> {
             var result = obj.sayHello("Raj");
            expect("Welcome user Rajkkk").toEqual(result);
    })
})