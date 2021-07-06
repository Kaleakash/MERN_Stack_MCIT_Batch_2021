// let fname="Raj";

// function getName(){
//     return fname;
// }

// function setName(fname){
//     this.fname=fname;
// }

class Employee {
    constructor(id,name){
        this.id = id;
        this.name = name;    
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id=id;
    }
    setName(name){
        this.name = name;
    }
}
module.exports={Employee}
