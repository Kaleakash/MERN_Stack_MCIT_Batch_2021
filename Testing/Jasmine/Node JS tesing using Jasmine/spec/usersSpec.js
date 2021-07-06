let EmpType  = require("../src/users");

describe("User Testing",()=> {
        let emp;
        beforeAll(()=> {
            emp = new EmpType.Employee(100,"Raj");
        })
        
        it("getName and getId",()=> {
            let id = emp.getId();
            let name = emp.getName();
            expect(100).toBe(id);
            expect("Raj").toBe(name);  
        })

        it("setName and setId/getId and getName()",()=> {
          emp.setId(101);
          emp.setName("Ramesh");
          let id = emp.getId();
          let name = emp.getName();
            expect(101).toBe(id);
            expect("Ramesh").toBe(name);  
        })

        
})