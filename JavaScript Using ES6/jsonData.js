let empObject = {id:100,name:"Raju","salary":12000};    // literal style object 
let empString = ` {"id":100,"name":"Ramesh","salary":120000} `;
document.write("<br/>Json in String format<br/>")
document.write(empString);
document.write("<br/>")
document.write("id is "+empString.id)

//converting string to json 
let empJson = JSON.parse(empString)
document.write("<br/>Json in Object format<br/>")
document.write(empJson);
document.write("<br/>")
document.write("id is "+empJson.id)

// convert object to string or json to string 
let empStr = JSON.stringify(empObject);
// convert string to json 
let empJson1 = JSON.parse(empStr);
document.write("<br/?After convert object to string and json<br/>")
document.write("<br/>id is "+empJson1.id)