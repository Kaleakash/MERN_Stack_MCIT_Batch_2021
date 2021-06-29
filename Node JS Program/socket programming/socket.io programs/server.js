let express = require("express");
let app = express();
let http = require("http").Server(app);     // http connected with app express reference. 
let io = require("socket.io")(http);


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


io.on("connection",(socket)=> {
    console.log("Client connected.....");

    socket.on("obj",(msg)=> {
        console.log(msg);
    })
    
})


http.listen(9090,()=>console.log("socket io server running on port number 9090"))