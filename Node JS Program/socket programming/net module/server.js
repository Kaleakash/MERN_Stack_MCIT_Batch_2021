let net = require("net");
// server receive created...
let server = net.createServer();
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
server.on("connection",(socket)=>{
    // connection confirmation 
    console.log("Client connected...");
    // receive the value from a client 
    socket.on("data",(data)=>{
        console.log(data.toString())
    });
    //This code is use to send to client.
    r1.on("line",(input)=>{
        socket.write(`From Server : ${input}`);
    })
    // send the value to client.
    socket.write("Hello Client, You successfully connected this application")
})
// server running on port number 9090
server.listen(9090,()=>console.log("server running on  port number 9090"));