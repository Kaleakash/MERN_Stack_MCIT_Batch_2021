let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,{useUnifiedTopology: true},(error,client)=> {
    if(!error){
        var db = client.db("mydb123");
db.collection("Employee").updateOne({_id:103},{$set:{age:40}},(err,result)=> {
                if(!err){
                    if(result.matchedCount>0){
                        console.log("Record updated successfully")
                    }else {
                        console.log("Id is invalid")
                    }
                }else {
                    console.log(err)
                }
                client.close();   
        }) 
           
    }
    
})