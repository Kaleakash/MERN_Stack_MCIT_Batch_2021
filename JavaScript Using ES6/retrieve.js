function retrieve() {
    //console.log("<br/>Value of a in retrieve js file "+a)
    let abc = sessionStorage.getItem("obj")
    console.log("Value from session storage is "+abc);
    let xyz = localStorage.getItem("obj");
    console.log("value from local storge is "+xyz);
}
