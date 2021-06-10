import React, { Component } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';
import { MyProvider } from './MyContext';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {pname:"Ajay Kumar"}
  }
  render() {
    return (
      <div>
        <MyProvider value={this.state}>
        <h2>Parent Component</h2>
        Name in parent component is {this.state.pname}<br/>
        <Child1></Child1>
        <Child2></Child2>
        </MyProvider>
      </div>
    )
  }
}



