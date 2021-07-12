import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {name:"Akash"}
  }
  render() {
    return (
      <div>
       <h1>Welcome to React JS with Docker user {this.state.name};</h1>
      </div>
    )
  }
}

