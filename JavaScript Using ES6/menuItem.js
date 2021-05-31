var count =1;
function addItems() {
    //console.log("Event fired...")
    let name = document.getElementById("name").value;
    let age  = document.getElementById("age").value;

    let divTag = document.getElementById("main"); // got reference of div tag 

    let pTag = document.createElement("p"); // create new tag 
    let pTagContent = document.createTextNode("Name is "+name+" Age is "+age);   // create content  
    pTag.setAttribute("class","myClass");       // class attribute with fixed value 
    pTag.setAttribute("id",count);      // id attribute and value dynamic 

    let aTag = document.createElement("a");
    let aTagContent = document.createTextNode("X")
    aTag.setAttribute("href","#");          // dummy path 
    aTag.setAttribute("onClick","deleteItem("+count+")");
    aTag.appendChild(aTagContent);  //X content added for  a tag 

   
    pTag.appendChild(pTagContent);  //in p tag added welcome message
    pTag.appendChild(aTag);
    divTag.appendChild(pTag);       // p tag is child for div tag.
    count++; 
    reset();
}
function reset() {
    document.getElementById("name").value="";
    document.getElementById("age").value="";
}
function deleteItem(idValue){
    //console.log("delete fun called..."+idValue)
    var tagP = document.getElementById(idValue);
    tagP.remove();
}