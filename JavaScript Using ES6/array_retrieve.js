let num1 = [100,200,300,400,500];
let num2 = new Array(100,200,300,400,500);
document.write("<br/> Number of elements is "+num1.length)
document.write("<br/> Number of elements is "+num2.length)
document.write("<br/> Get value using index position is "+num1[0])
document.write("<br/> Using classical for loop");

for(let i=0;i<num1.length;i++){
    document.write("<br/>Value is "+num1[i]);
}

document.write("<br/> Using for in loop");
for(let index in num1){
    document.write("<br/>Value is "+num1[index])
}

document.write("<br/> Using for of loop");
for(let n of num1){
    document.write("<br/> Value is "+n);
}

document.write("<br/>using forEach function with funtion name")

num1.forEach(displayNum);
num2.forEach(displayNum);

function displayNum(n){
    document.write("<br/> Value is "+n)
}

document.write("<br/>using forEach function with anonymous function")

num1.forEach(function(n){
    document.write("<br/> VAlue is "+n)
});

document.write("<br/> Retrieve elements from array using arrow function")

num1.forEach(n=>document.write("<br/> Value is "+n));








