function add(){
var a=10;
var b=20;
console.log("Value of a store js "+a)
sessionStorage.setItem("obj",a);
console.log("value store in session")
localStorage.setItem("obj",b)
console.log("Value store localStorage")
}