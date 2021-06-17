//load the modules 
let express = require("express");
let bodyParser = require("body-parser");

let app = express();

//middleware 
app.use(bodyParser.urlencoded({extended:true})) // read data from body part. 
app.use(bodyParser.json())                      // Enable json data from request body.

let employee = {"id":100,"name":"Ramesh","salary":12000}
let employees=[
    {"id":101,"name":"Lokesh",age:24},
    {"id":102,"name":"Ramesh",age:25},
    {"id":103,"name":"Raju",age:26},
    {"id":104,"name":"Ram",age:27},
]

//GET Methods 
//produce data in string format 
//http://localhost:9090/sayHello
app.get("/sayHello",(req,res)=> {
    res.send("Welcome to REST API using Express JS");
})
//produce employee data in json format
//http://localhost:9090/employee 
app.get("/employee",(req,res)=> {
       // res.json({"id":100})
       res.json(employee)
})
//produce array employee data in json format
//http://localhost:9090/employees 
app.get("/employees",(req,res)=> {
    // res.json({"id":100})
    res.json(employees)
})

// Get method with query param concept
//http://localhost:9090/queryParam?name=Raju&age=36 
//Client may be plain html, react or angular 
app.get("/queryParam",(req,res)=> {
    var name = req.query["name"]
    var age = req.query["age"]
    res.send("Welcome user your name is "+name+" Your age is "+age);
})

// Get method with path param concept
//http://localhost:9090/pathParam/100
//Client may be react, angular or command line interface. 
app.get("/pathParam/:id",(req,res)=> {
    var empId = req.params.id;
    res.send("Your id is "+empId);
})

// get method with more path param 
//http://localhost:9090/MultiPathParam/Ramesh/23
app.get("/MultiPathParam/:name/:age",(req,res)=> {
    var empName = req.params.name;
    var empAge = req.params.age;
    res.send("Your name is "+empName+", your age is "+empAge);
})


// Plain post method 
//http://localhost:9090/postMethod
app.post("/postMethod",(req,res)=>{
    console.log("Post method called");
    res.send("Post method");
})

// Passing data in json format {"id":100,"name":"Ramesh","salary":12000}
//http://localhost:9090/storeEmployee
app.post("/storeEmployee",(req,res)=> {
        var emp = req.body;
        console.log(emp)
        res.send("You send employee data")    
})

//Plain delete method 
//http://localhost:9090/deleteMethod
app.delete("/deleteMethod",(req,res)=>{
    console.log("delete method called");
    res.send("Delete method");
})


//http://localhost:9090/deleteById/100 we have to use value using path params 
app.delete("/deleteById/:id",(req,res)=>{
    var empId = req.params.id;
    console.log("delete method called with id "+empId);
    res.send("Delete method");
})


//Plain put method 
//http://localhost:9090/putMethod
app.put("/putMethod",(req,res)=>{
    console.log("Put method called");
    res.send("Put method");
})

// Update the records 
http://localhost:9090/updateEmpInfo we have to pass json data to update the records. 
app.put("/updateEmpInfo",(req,res)=>{
    var emp = req.body;
    console.log(emp);
    console.log("Put method called");
    res.send("Put method");
})

app.listen(9090,()=>console.log("Server is running on port number 9090"));
