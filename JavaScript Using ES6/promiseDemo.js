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

/*
var pr = new Promise((res,rej)=> {
    res({type: "cors", url: "http://numbersapi.com/1", redirected: false, status: 200,
    data:{"id":100,"name":"Ravi"}})
})

pr.then(res=>res.data).then(result=>console.log(result)).catch(e=>console.log(e));

fetch("http://numbersapi.com/1").
then(res=>{
    console.log(res)
    return res.text();  //filter body part from response 
}).then(data=>console.log(data)).catch(e=>console.log(e))

*/

/*
        req
                header
                body 

Client              Server 
          res 
                header 
                body   

*/
/*
let pr = fetch("http://numbersapi.com/1");  //REquest sent 
let response = pr.then(res=>res.text());
let result =    response.then(data=>data);
console.log(result);
*/

let pr = fetch("http://numbersapi.com/1")

//pr.then(response=>response.text()).then(result=>console.log(result)).catch(e=>console.log(e))
pr.then(response=>{
             var result = response.text()
             console.log(result)
}).catch(e=>console.log(e))
/*
async function LoadData() {
    let pr = fetch("http://numbersapi.com/1");//1
    let response = (await pr).text();          //2 
    let data = await response;                  //3
    console.log(data);                          //4
}
LoadData();
*/




