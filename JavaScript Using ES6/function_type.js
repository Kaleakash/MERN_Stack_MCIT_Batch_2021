// normal function 
info();
function info(){
    document.write("<br/>Normal Function style")
}
info();

//dis();            Error we can't call 

// expression style function with function name;
let dis = function display() {
        document.write("<br/> Expression style function with name")
}
//display();
dis();      // calling function 


//expression style function without name ie anonymous name 
let dis1 = function() {
    document.write("<br/> Expression style function without name")
}
dis1();

//IIFE : Immediately invoked function expression 

(function(){
    document.write("<br> Normal IIFE function")   
})();

(function(a,b){
    var sum = a+b;
    document.write("<br/> Sum is "+sum);
})(100,200);


//callback function 
function sayHello(fname,callback){
        return "Welcome "+callback(fname);
}
let maleInfo = function(fname){
    return "Mr "+fname;
}
let femaleInfo = function(fname){
    return "Miss "+fname;
}

document.write("<br/>User-defined callback function")
document.write("<br/>")
    document.write(sayHello("Raj",maleInfo))
document.write("<br/>")
document.write(sayHello("Reeta",femaleInfo))
document.write("<br/>")
document.write(sayHello("Rajiv",function(fname){
    return "Mr "+fname;
}));





