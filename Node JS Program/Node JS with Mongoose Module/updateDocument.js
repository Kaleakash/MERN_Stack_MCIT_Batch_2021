let obj = require("mongoose");
let url = "mongodb://localhost:27017/mydb123";

obj.connect(url,{ useUnifiedTopology: true ,useNewUrlParser: true});           // ready to connect 
let db = obj.connection;       // get the connection 

db.on("error",(e)=>console.log("Error Generated"));

db.once("open",()=> {
    console.log("Database connected successfully")
    //Creating the schema 
    let CustomerSchema = obj.Schema({
        _id:Number,
        cname:String,
        age:Number,
        register:Boolean,
        dob:Date
    });
    //Compile the schema to model 
    let CustomerType = obj.model("",CustomerSchema,"Customer");
    
    //Using this model we have to fire the query 
    CustomerType.updateOne({_id:101},{$set:{age:28}},(err,result)=> {
        if(!err){
            if(result.n>0){
                console.log("Record updated successfully")
            }else {
                console.log("Record didn't update")
            }
        }else {
            console.log(err)
        }
        obj.disconnect();
    })
})