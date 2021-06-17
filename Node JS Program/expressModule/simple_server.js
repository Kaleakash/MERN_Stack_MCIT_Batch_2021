// load the express module 
let express = require("express");
let bodyParser = require("body-parser");
let app = express();    //this is use to create the reference of express 



//middleware : intermediate application  
app.use(bodyParser.urlencoded({extended:true})) // unable data from req body 

//Get methods 
app.get("/",(req,res)=> {
    res.send("Welcome to Express JS Get method");
})
// about us path 
app.get("/aboutus",(req,res)=> {
    res.send("About Us Page");
})
// contact us path 
app.get("/contactus",(req,res)=> {
    res.send("Contact Us");
})
//aboutus.html page open 
app.get("/aboutuspage",(req,res)=>{
    //res.send(__dirname);
    res.sendFile(__dirname+"/aboutus.html");
})
//contactus.html page open 
app.get("/contactuspage",(req,res)=>{
    //res.send(__dirname);
    res.sendFile(__dirname+"/contactus.html");
})

//loginGet.html page open get method 
app.get("/loginGet",(req,res)=> {
        res.sendFile(__dirname+"/loginGet.html");
})

//checkLogin details information for get method 
app.get("/checkLoginDetails",(req,res)=> {
        var userName = req.query["user"]
        var passName = req.query["pass"];
        if(userName=="Ajay" && passName=="Kumar"){
                res.send("Successfully Login")
        }else {
                res.send("Failure try once again");
        }
})
//loginPost.html page open post method 
app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"/loginPost.html");
})
//checkLogin details information for post method 
app.post("/checkLoginDetails",(req,res)=> {
            var userName = req.body["user"]
            var passName = req.body["pass"]
            if(userName=="Vijay" && passName=="Kumar"){
                    res.send("Successfully Login "+userName)
            }else {
                    res.send("Failure try once again")
            }
})


let name = "Akash"
let htmlContent = `<html>
                        <head>
                        </head>
                        <body>
                        My Name is ${name}
                        </body>
                    </html>`

app.get("/getname",(req,res)=> {
    res.send(htmlContent);
})


app.listen(9090,()=>console.log("Server running in port number 9090"));









