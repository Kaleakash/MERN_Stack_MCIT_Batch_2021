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
    
    //creating customer object using customer type 
    let cus1 = new CustomerType({_id:105,cname:"Rajev",age:32,register:true,dob:new Date()})
    //let cus2 = new CustomerType({_id:101,cname:"Raj",age:22,register:false,dob:new Date()})
    //let cus3 = new CustomerType({_id:102,cname:"Ravi",age:23,register:true,dob:new Date()})

    //Using this model we have to fire the query 
    CustomerType.insertMany(cus1,(err,result)=> {
        if(!err){
            console.log(result)
        }else {
            console.log(err)
        }
        obj.disconnect();
    })
})