function add(a,b){
    return a+b;
}
function checkLoginDetails(user,pass){
    if(user=="Ramesh" && pass=="123"){
            return "success";
    }else {
            return "failure";
    }
}
function checkEvenAndOdd(num){
    if(num%2==0){
        return num;         // return number type 
    }else {
        return "Odd";          // return string type 
    }
}

module.exports={add,checkLoginDetails,checkEvenAndOdd}