describe("Employee Operation",()=> {
    it("Bonus Testing Manager",()=> {
        var result = updateSalary(100,"Ramesh",45000,"Manager");
        expect(50000).toBe(result);
    })

    it("Bonus Testing Programmer",()=> {
        var result = updateSalary(101,"Ravi",25000,"Programmer");
        expect(28000).toBe(result);
    })

    it("Bonus Testing Tester",()=> {
        var result = updateSalary(102,"Raju",15000,"Tester");
        expect(16500).toBe(result);
    })

    it("Bonus Testing Other",()=> {
        var result = updateSalary(103,"Raj",12000,"Clerk");
        expect("No Bonus").toContain(result);
    })
})