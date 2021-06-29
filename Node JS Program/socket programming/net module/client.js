let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// it connect to server using port number 9090
let client = net.createConnection(9090,()=>{
    // send data to server 
    client.write("I am a first client");
})
//This code is use to receive the message from server 
client.on("data",(data)=>{
    console.log(data.toString());
})
// it is use to pass the value to server 
r1.on("line",(input)=>{
    client.write(`First Client : ${input}`);
})