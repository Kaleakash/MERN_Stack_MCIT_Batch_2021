//ES5 style to create promise 
/*

let pr = new Promise(function(resolved,reject){
                resolved("Successfully done")
});

*/
//ES6 style to create promise 
/*1st example 
var obj = true;
let pr = new Promise((resolved,reject)=> {
    if(obj==true){
        resolved("Successfully done");
    }else {
        reject("Failure ")
    }
   
});

pr.then(data=>document.write("Then called..")).catch(error=>document.write("Catch called.."))

*/
//2nd example 
// promise return string message 
/*var obj = false;
let pr = new Promise((resolved,reject)=> {
    if(obj==true){
        resolved("Successfully done");
    }else {
        reject("Failure ")
    }
   
});

pr.then(abc=>document.write(abc)).catch(e=>document.write(e))

*/


/*
var obj = true;
let pr = new Promise((resolved,reject)=> {
    if(obj==true){
        resolved([{"id":100,"name":"Ravi","age":21},
            {"id":101,"name":"Lokesh","age":22}]);
    }else {
        reject({"msg":"Error generated with reason","code":"404"})
    }
   
});

pr.then(result=>document.write(result[0].name)).catch(e=>document.write(e.msg))
*/
//ES6 style 
//fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).
//then(result=>console.log(result)).catch(error=>console.log(error));

/*fetch("https://jsonplaceholder.typicode.com/todos").then(res=>{
    if(res.status==200){
        return res.json();
    }else {
        return "Some error generated";
    }
}).then(result=>console.log(result)).catch(error=>console.log(error))*/

//ES5 style 
/*fetch("https://jsonplaceholder.typicode.com/todos").then(function(res){
    return res.json();
}).then(function(result) {
    console.log(result)
}).catch(function(error){
    console.log(error)
})*/














