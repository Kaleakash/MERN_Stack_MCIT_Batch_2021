import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {id:100,name:"Raju",salary:12000}
  }
  increment= ()=>{
      this.setState({salary:this.state.salary+1000});
  }
  decrement= ()=> {
    this.setState({salary:this.state.salary-1000});
  }
  render() {
    return (
      <div>
      <h2>Employee Details are </h2>
      Id is {this.state.id}, Name is {this.state.name}, Salary {this.state.salary} 
      <br/>
      <input type="button" value="Increment" onClick={this.increment}/>
      <input type="button" value="Decrement" onClick={this.decrement}/>     
      </div>
    )
  }
}
