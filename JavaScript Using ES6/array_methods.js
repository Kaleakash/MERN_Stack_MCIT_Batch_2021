/*let num1 = [100,200,300];
document.write("<br/> Array Methods ")
document.write("<br/> Size of the array "+num1.length)
document.write("<br/>")
document.write(num1)
num1.push(400)  // add element at last 
num1.push(500); // add element at last 
document.write("<br/>")
document.write(num1)
num1.unshift(1)     // add element at the begining 
num1.unshift(2);        //add element at teh begining 
document.write("<br/>")
document.write(num1)
num1.pop();         // remove last element 
num1.shift();       // remove first element 
document.write("<br/>")
document.write(num1)*/
/*let num1  = [100,200,300,400,500];
document.write("<br/>")
document.write(num1);
//num1.splice(1,2);       //1st parameter index position and 2nd number of element to delete 
//num1.splice(1,0,111);       //1st parameter index position and 2nd number of element and 3d add the element
//num1.splice(1,0,111,222,333)
num1.splice(1,2,222,333);
document.write("<br/>")
document.write(num1);*/

// Array de structure 

//let num1=[100,200,300,400];
//document.write("<br/> "+num1[0])
/*let a = num1[0]
let b =num1[1]
let c = num1[2]
let d = num1[3];*/
//let [a,b,c,d]=num1;     // array de structure  
//let [,,a,b]=num1;       //skip 0 and 1 index position 
//document.write("<br/> "+a);
//document.write("<br/> "+b);
//document.write("<br/> "+c);
//document.write("<br/> "+d);
/*
let emp1=[100,"Ajay Kumar",15000,"C","C++","Java","Angular"];
let emp2=[101,"Mahesh Patil",18000,"HTML","CSS"];
let emp3=[102,"Seeta Kumari",22000,"Python","AI","Data Science"];
let emp4 = [103,"Balaji",10000];
//...skillSet can hold zero, 1 or many values. 
let [id,fname,salary,...skillSet]=emp3; //REST Operator 
document.write("Id is "+id)
document.write("<br/> Name is "+fname)
document.write("<br/> Salary is "+salary)
document.write("<br/> Number of skillset is "+skillSet.length)
document.write("<br/> Skill Info "+skillSet)

//let obj = { id: 100, name: "Ajay"}; 
//document.write(obj.id)

*/
// array is known as reference data type like pointer in C
/*let num1 = [100,200,300,400];
document.write("<br/>")
document.write(num1);
//let num2 = num1;  //num1 and num2 refere to same memory       
let num2 = [...num1]    // copy or clone of array 
document.write("<br/> After assign num1 into num2 <br/>")
document.write(num1);
document.write("<br/>")
document.write(num2);
            num1.push(1010);
document.write("<br> After added 1010 in num1 <br/>")
document.write(num1);
document.write("<br/>")
document.write(num2);*/
//let num1 = [100,200,300,400]
//let num2 = [500,600,700,800];
//let num = [num1,num2];
//let num = [num1[0],num1[1],num1[2],num1[3],num2[0],num2[1],num2[2],num2[3]]
//let num =[...num1,...num2];
//document.write("<br> Array Length")
//document.write("<br> num1 Length "+num1.length)
//document.write("<br> num2 Length "+num2.length)
//document.write("<br> num Length "+num.length)
//document.write("<Br/> num1 index "+num1[0])
//document.write("<Br/> num2 index "+num2[0])
//document.write("<Br/> num index "+num[0])


// function style upto ES5 
function Employee() {
    this.id = 100;
    this.fname = "Ramesh";
}
let emp1 = new Employee();
/*
//Object creation using literal style   ES5 and ES6  
let emp2 = {id:101,fname:"Lokesh"};

document.write("values of ES5 and Literal style<br/>")
document.write("<br/>First emp id"+emp1.id)
document.write("<br/>First emp name "+emp1.fname)

document.write("<br/>Second emp id"+emp2.id)
document.write("<br/>Second emp name "+emp2.fname)
*/
/*let employee = {id:111,fname:"Ajay",salary:12000};
let address = {city:"Bangalore",state:"Kar"};

//let employeeInfo = {employee,address};  // combine employee and address 
//document.write("<br/>After combine employee address ")
//document.write(employeeInfo)
//document.write("<br> Id is "+employeeInfo.address.city)

let employeeInfo = {...employee,...address} // spread operator 
//document.write("<br/>After merge using spread operator")
document.write("<br> Id is "+employee.id)
*/
/*
// without spread operator 
let skillSet={skill:"HTML"}
let e1 = {id:100,fname:"Ravi",skillSet}
let e2 = {id:101,fname:"Ramesh",skillSet}
//console.log(e1)
document.write(e1.fname+" "+e1.skillSet.skill)
document.write("<br/>")
document.write(e2.fname+" "+e2.skillSet.skill)
e1.skillSet.skill="HTML5";       // html to html5
document.write("<br/>")
document.write(e1.fname+" "+e1.skillSet.skill)
document.write("<br/>")
document.write(e2.fname+" "+e2.skillSet.skill)
*/
//with spread operator 
let skillSet={skill:"HTML"}
let e1 = {id:100,fname:"Ravi",...skillSet}
let e2 = {id:101,fname:"Ramesh",...skillSet}
document.write(e1.fname+" "+e1.skill)
document.write("<br/>")
document.write(e2.fname+" "+e2.skill)
e1.skill="HTML5";       // html to html5
document.write("<br/>")
document.write(e1.fname+" "+e1.skill)
document.write("<br/>")
document.write(e2.fname+" "+e2.skill)











