import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={pname:"Ajay Kumar",childName:""};
  }
  recevieChildValue=(data)=>{
   // console.log(data);
   this.setState({childName:data});
  }
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        Parent name is {this.state.pname} child name is {this.state.childName}
        <br/>
        <Child parentToChild={this.state.pname} 
        childToParent={this.recevieChildValue}></Child>
      </div>
    )
  }
}

