let obj = require("readline"); // use asyn
let r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter the id",(id)=>{
    
    r1.question("Enter the name",(name)=>{

        r1.question("Enter the salary",(salary)=>{

            console.log("Your id is "+id);
            console.log("your name is "+name);
            console.log("your salary is "+salary);
            
            r1.close();
        })

    })
    
})