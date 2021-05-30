// function with no passing parameter 
let sayHello = function() {
    document.write("Expression style anonymous function")
}
sayHello();


let sayHi = ()=> document.write("<br/>Welcome to Arrow function")
sayHi();

//function with passing and return value. 

let addNumber1 = function(a,b){
    var sum = a+b;
    return sum;
}
document.write("<br/> Sum using expression style "+addNumber1(1,2));

//Arrow function by default return value without return keyword. 

let addNumber2 = (a,b)=>a+b;
document.write("<br/> sum using arrow style is "+addNumber2(3,4));


let findLargest = (a,b)=> {
    if(a>b){
        return "a is largest";
    }else {
        return "b is largest";
    }
}
document.write("<br/> Largest number is "+findLargest(10,50))


