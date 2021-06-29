let express =require("express");
// we have to create the reference of express 
let app = express();

//now we have to create the reference of web-socket using express referen 
let ws = require("express-ws")(app);

//  http://localhost:9090
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

app.ws("/",(socket,req)=>{
        console.log("Web Socket connection done successfully!")
        
        // this is use to receive the message from browser client 
        socket.on("message",(data)=>{
            console.log(data);
            socket.send(data);
        })
        // this is use to send the message to browser client. 
        socket.send("Welcome Client you successfully connected websocket");

})


app.listen(9090,()=>console.log("WebSocket Server running port port number 9090"))