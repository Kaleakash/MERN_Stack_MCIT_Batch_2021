let http = require("http");
let htmlContent = `
                <html>
                        <head>

                        </head>
                        <body>
                        <b>Welcome to HTML Module using Node JS</b>
                        </body>
                </html>
`
var server = http.createServer(function(req,res) {
        console.log(req.url)
        console.log(req.headers)
        console.log(req.method)
        res.end(htmlContent);
});
server.listen(9090);
console.log("Server is running on port number 9090")
