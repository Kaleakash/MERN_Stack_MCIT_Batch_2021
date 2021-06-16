let obj = require("readline")
let r1 = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter the name",(name)=>{
    console.log("Your name is "+name);
    r1.close();
}
)