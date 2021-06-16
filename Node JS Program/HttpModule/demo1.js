let http = require("http");
var server = http.createServer(function(req,res) {
        console.log("Client send request");
        res.end("Welcome to Node JS Simple Program using Http Module");
});
server.listen(9090);
console.log("Server is running on port number 9090")
