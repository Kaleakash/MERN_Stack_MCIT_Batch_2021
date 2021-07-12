function checkUser() {
    let user = document.getElementsByName("user")[0].value;
    let pass = document.getElementsByName("pass")[0].value;
    if(user.length==0){
        alert("User Name is required")
        return false;
    }else if(pass.length==0){
        alert("Password is required")
        return false;
    }else if(user=="Raj" && pass=="123"){
            alert("Successfully Login")
            return true;
            //window.open("home.html");
    }else {
            alert("InValid details ")
            return false;
    }
}