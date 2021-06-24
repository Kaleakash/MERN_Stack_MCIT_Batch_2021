let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,{useUnifiedTopology: true},(error,client)=> {
    if(!error){
        var db = client.db("mydb123");
db.collection("Employee").deleteOne({_id:106},(err,result)=> {
                if(!err){
                    //console.log(result);
                    if(result.deletedCount>0){
                    console.log("Record deleted successfully");
                    }else {
                    console.log("Record not present");
                    }
                }else {
                    console.log(err)
                }
                client.close();   
        }) 
           
    }
    
})