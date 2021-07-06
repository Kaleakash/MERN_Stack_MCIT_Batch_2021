describe("Operation Testing",()=> {
    
    it("Addition Testing",()=> {
        var result = add(10,20)     // calling the functions. 
        expect(30).toBe(result);
    })
    
    it("Substraction Testing",()=> {
        var result = sub(20,10)     // calling the functions. 
        expect(10).toBe(result);
    })

    it("Multiplication Testing",()=> {
        var result = mult(5,5)     // calling the functions. 
        expect(25).toBe(result);
    })

    it("Division Testing",()=> {
        var result = div(10,2)     // calling the functions. 
        expect(5).toBe(result);
    })

})