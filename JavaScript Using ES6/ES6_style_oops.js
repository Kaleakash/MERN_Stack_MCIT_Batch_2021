//ES5 style function style  
/*function Employee() {
    this.empId = 100;
    this.empName = "Ramesh Kumar";
    this.disEmpInfo = function() {
        document.write("<br> Employee class function")
        document.write("<br> Id is "+this.empId)
        document.write("<br> Name is "+this.empName)
    }
}
var emp1 = new Employee();
emp1.disEmpInfo();
//ES6 style class style 
class Customer {
    empId = 101;        // no this, let and no var 
    empName = "Ajay Kumar";
    disCustomerInfo(){
        document.write("<br> Customer class function");
        document.write("<br/> Id is "+this.empId);
        document.write("<br/> Name is "+this.empName);
    }
}
let cust1 = new Customer();
cust1.disCustomerInfo();*/

//constructor 
//ES5 style 
// It is a function itself is a class as well as constructor

/*function Employee() {
        alert(" Employee object created...")
}
var emp1 = new Employee();
//From ES6 if we want to write a constructor 
// we have to create a function with name 
// constructor 
class Customer {
        //alert("Object created....");
        constructor() {
            alert("Customer object created...")
        }
}
let cust1 = new Customer();
*/

//Parameterized constructor 
//ES5 style 
/*function Employee(empId,empName) {
    this.empId =empId;
    this.empName = empName;
    this.disEmpInfo = function() {
        document.write("<br> Employee Details are");
        document.write("<br> Id is "+this.empId);
        document.write("<br> Name is "+this.empName);
    } 
}
var emp1 = new Employee(100,"Ravi");
emp1.disEmpInfo();*/
//ES6 style write constructor with instance variable 
//with this keyword and more than one functions. 
/*class Customer {
       // custId= 0;
       // custName = ""
        constructor(custId=123,custName="Unknown"){
            //alert("customer memory ")
            this.custId= custId;
            this.custName=custName;
        }
        //constructor(){}
        disCustInfo() {
            document.write("<br> Customer details are ")
            document.write("<br> Cust Id is "+this.custId);
            document.write("<br> Cust Name is "+this.custName);
        }
}
let cust1 = new Customer(101,"RAmesh");
cust1.disCustInfo();
let cust2 = new Customer(102)
cust2.disCustInfo();
let cust3 = new Customer();
cust3.disCustInfo();
let cust4 = new Customer(103,"Vikash",21);
cust4.disCustInfo();    */

// Inheritance in ES6 

class Employee {            // super class
    disEmpInfo() {
        document.write("<br/>Employee function")
    }
}
class Manager extends Employee {    // sub class 
    disMgrInfo() {
        document.write("<br/>Manager function")
    }
}
let emp = new Employee();
emp.disEmpInfo();
//emp.disMgrInfo();
let mgr = new Manager();
mgr.disEmpInfo();
mgr.disMgrInfo();





