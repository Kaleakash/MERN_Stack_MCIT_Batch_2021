import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {connect} from 'react-redux';
class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {salary:0}
  }
  handleChange=(event)=>{
    this.setState({salary:event.target.value})
  }
  render() {
    return (
      <div className="container">
        <h2>In App component </h2>
        Id is {this.props.id} Name is {this.props.name},salary is {this.props.salary}
        <br/>
        Salary :<input type="text" name="salary" onChange={this.handleChange}/>
        <br/>

        <input type="button" value="Increment Salary " 
        onClick={()=>this.props.increment(this.state.salary)} className="btn btn-success"/>
        <input type="button" value="Increment Salary " 
        onClick={()=>this.props.decrement(this.state.salary)} className="btn btn-success"/>
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return{
    id:state.id,
    name:state.name,
    salary:state.salary
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    increment : (salary)=>dispatch({type:"INCREMENT",payload:salary}),
    decrement : (salary)=>dispatch({type:"DECREMENT",payload:salary})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
//in connect first parameter global state and 2nd parameter is action 