let fetch = require("node-fetch");// load node-fetch module 
//import {fetch} from 'node-fetch';
// using promise with then and catch 
/*function loadData() {
fetch("https://jsonplaceholder.typicode.com/todos").
then(res=>res.json()).
then(data=>console.log(data)).
catch(e=>console.log(e))
}
loadData();*/
//using async and await 
async function loadData() {
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    console.log(data);
    }catch(e){
        console.log(e.code)          // solve the error. 
    }
    console.log("Normal Statement")
    console.log("Normal Statement")
    console.log("Normal Statement")
    console.log("Normal Statement")
}
loadData();