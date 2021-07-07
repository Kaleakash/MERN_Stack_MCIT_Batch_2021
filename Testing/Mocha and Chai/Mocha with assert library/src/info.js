function greet(name,gender){
    if(gender=="Male"){
        return "Mr "+name;
    }else {
        return "Miss "+name;
    }
}


module.exports={greet}