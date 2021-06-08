import React from 'react';
class Sample extends React.Component{

constructor(props){
    super(props);
    this.state = {name:"Ravi"}
// we have to register normal function in constructor using bind
    this.fun1 = this.fun1.bind(this);   //register this in fun1
}

fun1() {    //without bind we can't access component object. 
    alert("Event fired in Normal function");
    console.log(this);
    //this.setState({name:"Ramesh"});
}

fun2 = ()=> {
    alert("Event fired in arrow function")
    console.log(this)
    this.setState({name:"Rajesh"});
}

    render() {
        return(
            <>
            <h2>React Event Example</h2>
<input type="button" value="Normal function" onClick={this.fun1}/><br/>
<input type="button" value="Arrow function" onClick={this.fun2}/><br/>
<input type="button" value="Local arrow function" 
onClick={()=>{alert("Event fired in local arrow function");
            console.log(this);
            this.setState({name:"Ali"})
            }}/>
            <br/>
            Name is {this.state.name}
            </>
        )
    }
}
export default Sample;