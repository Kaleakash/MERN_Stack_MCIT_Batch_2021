let obj = require("mongoose");
let url = "mongodb://localhost:27017/mydb123";

obj.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true});           // ready to connect 
let db = obj.connection;       // get the connection 

db.on("error",(e)=>console.log("Error Generated"));

db.once("open",()=> {
    console.log("Database connected successfully")
    //Creating the schema 
    let EmpSchema = obj.Schema({
        _id:Number,
        name:String,
        age:Number,
        "address.city":String,
        "address.state":String
    });
    //Compile the schema to model 
    let EmpModelType = obj.model("",EmpSchema,"Employee");

    //Using this model we have to fire the query 
    EmpModelType.find({},(err,result)=> {
        if(!err){
            console.log(result)
        }else {
            console.log("Error generate "+err)
        }
        obj.disconnect();
    })
})