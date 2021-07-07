let app = require("../src/app")

let superTest = require("supertest");

describe("REST API Testing",()=> {
    
    xit("Get Method - Simple Text Message Testing ",(finish)=> {
    superTest(app).get("/simpleText").expect(200).
    expect(data=>expect(data.text).toBe("Welcome to REST API")).
    end(error=>error ? finish(error) : finish())
    })

    xit("Get Method - JSON Object ",(finish)=> {
        superTest(app).get("/emp").expect(200).
        expect(data=>{
            let emp = data.body;
            let id = emp.id;
            let name = emp.name;
            let age = emp.age;
            expect(100).toBe(id);
            expect("Ravi").toBe(name)
            expect(20).toBeLessThan(age);// age not less than 20
        }).
        end(error=>error ? finish(error) : finish())
    })


    xit("Get Method - JSON Array Object ",(finish)=> {
        superTest(app).get("/employees").expect(200).
        expect(data=>{
            let emp = data.body;
            let e1 = emp[0];
            let id = e1.id;
            let name = e1.name;
            let age = e1.age;
            expect(3).toEqual(emp.length);
            expect(0).toBeLessThan(id);
            expect(name).toContain("a")

        }).
        end(error=>error ? finish(error) : finish())
    })

    xit("Post Method Testing",(finish)=> {
        let emp ={id:3,name:"Ramesh",age:32}
        superTest(app).post("/storeEmployee").send(emp).
        expect(200).
        expect(data=>expect("Record stored successfully").toBe(data.text)).
        end(error=>error ? finish(error) : finish())
    })


    it("Get Method - JSON DB Data ",(finish)=> {
        superTest(app).get("/product/allProduct").expect(200).
        expect(data=>{
               let product = data.body;
               expect(2).toEqual(product.length);

        }).
        end(error=>error ? finish(error) : finish())
    })
})