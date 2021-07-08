const chai = require("chai");       //loaded 
const chaiHttp = require("chai-http");
const app = require("../src/app");
const expect = chai.expect;         // apply the style. 

// enable chaiHttp features inside a chai module. 
chai.use(chaiHttp);

describe('Express testing using mocha and chai', () => {
   
  xit("Simple Get tex message testing",async ()=> {
     let res = await chai.request(app).get("/message");
      expect(res.status).to.equal(200);
      expect(res.text).to.equal("Welcome to REST API");
      
   })

   xit("JSON Array",async ()=> {
     let res = await chai.request(app).get("/allCustomer");
     let customer = res.body;
     let c1 = customer[0]

     expect(res.status).to.equal(200);
     expect(1).to.equal(customer.length);
     expect(100).to.equal(c1.cid);
     expect("Ramesh").to.equal(c1.cname)
     expect(21).to.equal(c1.age)
  })

  xit("post Array method test", async ()=> {
      let customer = {"cid":101,"cname":"Ajay",age:34}
      let res = await chai.request(app).post("/storeDetails").send(customer);
       
      expect(res.status).to.equal(200);
      expect(res.text).to.equal("Customer record stored");
  })


  xit(" Upate the Age ", async ()=> {
    let customer = {"cid":106,age:36}
    let res = await chai.request(app).put("/updateAge").send(customer);
     
    expect(res.status).to.equal(200);
    //expect(res.text).to.equal("Age updated successfully");
    expect(res.text).to.equal("Record not present");
})

it("Delete Customer using CId property",async()=> {
    let cid = 104;
    let res = await chai.request(app).delete("/deleteCustomer/"+cid);
    expect(res.status).to.equal(200);
    //expect(res.text).to.equal("Record deleted successfully");
    expect(res.text).to.equal("Record not present");
})

})
