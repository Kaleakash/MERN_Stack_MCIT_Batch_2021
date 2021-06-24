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
    CustomerType.deleteMany({age:{$gt:25}},(err,result)=> {
        if(!err){
            if(result.deletedCount>0){
                console.log("Deleted records successfully")
            }else {
                console.log("Record didn't delete")
            }
        }else {
            console.log(err)
        }
        obj.disconnect();
    })
})