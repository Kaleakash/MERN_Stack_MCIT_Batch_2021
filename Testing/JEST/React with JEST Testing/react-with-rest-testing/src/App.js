import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {name:"Ramesh",age:21,salary:12000};
  }
  
  fun = ()=> {
    return "Welcome to React JS";
  }
  changeSalary = ()=>{
    //let salary = this.state.salary;
    //salary = salary+1000;
    this.setState({salary:this.state.salary+1000})
  }
  render() {
    return (
      <div>
        <h1>Welcome to React JS Testing</h1>
        <p>Name is {this.state.name}</p>
        <br/>
        Salary is {this.state.salary}<br/>
        <input type="button" value="Increment Salary" onClick={this.changeSalary} 
        id="b1"/>
      </div>
    )
  }
}


export default App;
