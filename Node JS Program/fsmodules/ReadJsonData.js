let fs = require("fs");
fs.readFile("employee.json",(err,data)=> {
    if(!err){
        //console.log(data.toString())
        let empInfo = data.toString();
        console.log("id is "+empInfo.id)
        // convert string to json 
        let empJson = JSON.parse(empInfo);
        console.log("id is "+empJson.id);
        console.log("name is "+empJson.name);
        console.log("salary is "+empJson.salary);
    }
})