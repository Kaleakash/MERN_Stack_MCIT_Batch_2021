let url = require("url");
let util = require("util")
/*var urlInfo = "http://localhost:9090?name=Ajay&age=21";
console.log(urlInfo);
// this method help to convert string to url object. 
    var urlObject = url.parse(urlInfo);
    console.log(urlObject);
console.log("protocol "+urlObject.protocol)
console.log("port number "+urlObject.port)
console.log("whole url is "+urlObject.href)
console.log("query information "+urlInfo.query)
    let queryObject = url.parse(urlInfo,true);
console.log(queryObject.query)
console.log(queryObject.query.name)
console.log(queryObject.query.age)*/
//console.log(util.inspect(url))
console.log(util.inspect(url,true,8,true))