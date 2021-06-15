// synchronous code function 
/*function fun1() {
    return 10;
}
console.log(fun1())
console.log("Normal Statement");*/
//asynchronous function 
/*async function fun1() {
    return 10;
}
//console.log(fun1())
fun1().then(data=>console.log(data)).catch(e=>console.log(e))
console.log("Normal Statement")*/

//using promise 
/*function fun1() {
    let obj = new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,"Successfully Done!")
    } );
    //let result = obj;
    //console.log(result);
    obj.then(data=>console.log(data))
}
fun1();*/
//using async and await 
async function fun1() {
    let obj = new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,"Successfully Done!")
    } );
    let result = await obj;     // replacement of then 
    console.log(result);
}
fun1();







