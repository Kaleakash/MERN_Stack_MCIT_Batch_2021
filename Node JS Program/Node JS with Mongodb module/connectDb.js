//it load mongodb module and create the reference using MongoClient property 
let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,{useUnifiedTopology: true},(err,client)=>{


    if(!err){
        var db = client.db("mydb123");
        console.log("Database connected successully")
        client.close();
    }else {
        console.log("Error generated..."+err)
    }

    
})
