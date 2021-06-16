let http = require("http");
var server = http.createServer(function(req,res) {
        console.log("Client send request");
res.end("<html><head></head><body><h1>Welcome to Node JS Simple Program using Http Module</h1></body></html>");
});
server.listen(9090);
console.log("Server is running on port number 9090")
