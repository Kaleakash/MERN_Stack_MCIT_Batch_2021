// state may be number, string, boolean, array type or object. 
const initialState = {
    id:100,
    name:"Ravi",
    salary:12000
}

export default function reducer(state = initialState,action){
    console.log(action)
    let newState = {...state};  // copy of state variable. 
    switch(action.type){
        case "INCREMENT": newState.salary = newState.salary + eval(action.payload); 
                            break;
        case "DECREMENT": newState.salary = newState.salary - eval(action.payload);
                            break;                    
    }
    return newState;
}