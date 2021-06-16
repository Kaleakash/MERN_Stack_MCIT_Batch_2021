let http = require("http");
let url = require("url");
let LoginPage = `
        <html>
                <head>

                </head>
                <body>
                <form action="/checkLogin">
                <label>UserName</label>
                <input type="text" name="user"/><br/>
                <label>Password</label>
                <input type="password" name="pass"/><br/>
                <input type="submit" value="submit"/>
                <input type="reset" value="reset"/>
                </form>
                </body>
        </html>
`
let server = http.createServer((req,res)=> {
        let urlDetails = url.parse(req.url,true);
        console.log(urlDetails);
        if(urlDetails.path != '/favicon.icon'){
            console.log(req.url)
            if(req.url=="/aboutus"){
              res.end("About Us")
            }
            else if(urlDetails.path=="/contactus"){
                res.end("Contact Page")
            }
            else if(urlDetails.path=="/login"){
                res.end(LoginPage)
            }else if(urlDetails.pathname=="/checkLogin"){
                    let loginData = urlDetails.query;
                    if(loginData.user==="Ajay" && loginData.pass==="Kumar"){
                        res.end("Successfully Login")
                    }else {
                        res.end("Failure try once again")
                        //res.write("Failure try once again")
                        //res.write(LoginPage)
                        //res.end();
                    }
            }else {
                res.end("Not found Path")
            }
        }
})
server.listen(9090)
console.log("Server is running on port number 9090");