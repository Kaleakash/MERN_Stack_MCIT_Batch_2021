/*
if manager  = salary +5000;
if programmer = salary +3000;
if tester   salary +1500;
    no bonus 

*/
function updateSalary(id,name,salary,desg){
        if(desg=="Manager"){
        return salary+5000;
        }else if(desg=="Programmer"){
            return salary+3000;
        }else if(desg=="Tester"){
            return salary+1500;
        }else {
            return "No Bonus";
        }
}