let express = require("express");
let bodyParser = require("body-parser");

let app = express();
let customerInfo = [
    {"cid":100,"cname":"Ramesh",age:21}
]
app.use(bodyParser.json());

app.get("/message",(req,res)=> {
    res.send("Welcome to REST API");
});

app.get("/allCustomer",(req,res)=> {
    res.send(customerInfo);
})

app.post("/storeDetails",(req,res)=> {
        let customer = req.body;
        let result = customerInfo.find(c=>c.cid==customer.cid);
        if(result == undefined){
            customerInfo.push(customer);
            res.send("Customer record stored");
        }else {
            res.send("Customer Id must be unique");
        }
              
})


app.put("/updateAge",(req,res)=> {
    let customer = req.body;    // receive from body request 
    let index = customerInfo.findIndex(c=>c.cid==customer.cid);
    
    if(index<0){
        res.send("Record not present");
    }else {
        customerInfo[index].age = customer.age;
        res.send("Age updated successfully");
    }
})


app.delete("/deleteCustomer/:cid",(req,res)=> {
    let cid = req.params.cid;
    let index = customerInfo.findIndex(c=>c.cid==cid);
    if(index<0){
            res.send("Record not present");
    }else {
        customerInfo.splice(index,1);
        res.send("Record deleted successfully")
    }
})



app.listen(9090,()=>console.log("Server running on port number 9090"));


module.exports=app;

