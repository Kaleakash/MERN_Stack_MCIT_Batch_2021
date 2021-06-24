let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";

obj.connect(url,{useUnifiedTopology: true},(error,client)=> {
    if(!error){
        var db = client.db("mydb123");
//var cursor = db.collection("Employee").find();
var cursor = db.collection("Employee").find({age:{$gt:30}})
        cursor.forEach(e=>{
        //console.log(e)    //display whole data. 
console.log("Name "+e.name+" Age "+e.age+"City "+e.address.city)
            client.close();    
        })
        
    }
    
})