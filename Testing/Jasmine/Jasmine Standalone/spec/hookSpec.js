describe("Hook function",()=> {
    var a,b;
    beforeAll(()=> {        // reources file, initialization, database. 
        a=10;
        b=20;
        console.log("Before all testing function - only once")
    })
    beforeEach(()=>{
        console.log("before function")
    })
    it("1st Testing",()=>{
        console.log("1st test function")
                //add(a,b)
    })

    it("2nd Testing",()=>{
                    //sub(a,b)
        console.log("2nd test function")
    })
    afterEach(()=>{
        console.log("after function")
    })
    afterAll(()=> {     // closing the resources. 
        console.log("After all testing function - only once")
    })
})