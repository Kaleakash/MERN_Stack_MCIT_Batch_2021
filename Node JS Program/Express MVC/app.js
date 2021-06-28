// router file loaded..
let ProuctRouter = require("./router/product.router");

// load the pre defined modules 
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");

//express module reference 
let app = express();
//app.use(bodyParser.urlencoded({extended:true})); // normal html page post method  
app.use(bodyParser.json())  // to enable json data from ody part

//Database connection URL 
let url = "mongodb://localhost:27017/mydb123";

// to avoid warning 
let option = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

//Databse connection 
mongoose.connect(url,option);

//Connect database. Establish the connection 
mongoose.connection;        

// main path get match 
app.use("/api/product",ProuctRouter);




app.listen(9999,()=>console.log("Server running on port number 9999"));
