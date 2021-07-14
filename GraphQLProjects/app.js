let express = require("express");
let graphqlHttp = require("express-graphql").graphqlHTTP;
let trainerSchema = require("./trainerschema");

let app = express();

//middleware 
app.use("/graphql",graphqlHttp({
    schema:trainerSchema,
    graphiql:true
}));

app.listen(9090,()=>console.log("Server running on port number 9090"));

/*
run the program using the command as 

node app.js 
then 
open the browser 

http://localhost:9090/graphql


*/