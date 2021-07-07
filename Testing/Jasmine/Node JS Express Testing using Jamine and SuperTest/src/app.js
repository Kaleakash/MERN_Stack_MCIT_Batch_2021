let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let ProductRouter = require("./product.router");
app.use(bodyParser.json())
let url = "mongodb://localhost:27017/mydb123"

mongoose.connect(url);
mongoose.connection;

let emp = {id:100,name:"Ravi",age:21};
let employees =[
    {id:1,name:"Ajay",age:-23},
    {id:2,name:"Vijay",age:26},
    {id:3,name:"Ramesh",age:29},
]
app.get("/simpleText",(req,res)=> {
    res.send("Welcome to REST API");
})
app.get("/emp",(req,res)=> {
    res.json(emp);
})
app.get("/employees",(req,res)=> {
    res.json(employees);
})
app.post("/storeEmployee",(req,res)=> {
        let emp = req.body;
        employees.push(emp);
        res.send("Record stored successfully");
})

app.use("/product",ProductRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"))

module.exports=app;

