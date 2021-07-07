async function add(a,b){
    return a+b;
}

//console.log(add(10,20));
//add(10,20).then(res=>console.log(res)).catch(e=>console.log(e))
/*
if user-defined async it return promise objects. 
fetch("url").then().catch();
*/

module.exports={add}