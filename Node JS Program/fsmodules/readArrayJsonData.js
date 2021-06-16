let fs = require("fs");

fs.readFile("empInfo.json",(err,data)=> {
    if(!err){
        //console.log(data.toString());
        let employeeInfo = JSON.parse(data.toString());
        console.log(employeeInfo.length);
employeeInfo.forEach(emp=>console.log(emp.id+" "+emp.fname+" "+emp.age));
    }
})