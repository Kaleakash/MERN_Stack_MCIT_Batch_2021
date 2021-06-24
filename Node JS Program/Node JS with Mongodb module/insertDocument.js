let obj = require("mongodb").MongoClient;
let url ="mongodb://localhost:27017";
let emp = {_id:"107",name:"Vijay",age:"abfc36",address:{city:"Delhi",state:"Delhi"}}
obj.connect(url,{useUnifiedTopology: true},(error,client)=> {
    if(!error){
        var db = client.db("mydb123");
db.collection("Employee").insertOne(emp,(err,result)=> {
                if(!err){
                    console.log(result);
                }else {
                    console.log(err)
                }
                client.close();   
        }) 
           
    }
    
})