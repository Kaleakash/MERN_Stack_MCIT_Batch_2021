import React, { Component } from 'react'

export default class AddNames extends Component {
    constructor(props){
        super(props);
        this.state = {names:[],name:""}
    }
    handleChange=(event)=> {
    this.setState({name:event.target.value});
    }
    addName= ()=> {
        let nameValue = this.state.name;    // get the value of text field
        console.log(nameValue)
        let names = this.state.names;        // get the reference of array of state
        names.push(nameValue);  
        this.setState({names}); 
    }
    render() {
        let name = this.state.names.map((v,i)=><li key={i}>{v}</li>)
        return (
            <div>
    Name :<input type="text" name="name" onChange={this.handleChange}/>
    <br/><input type="button" value="Add Names" onClick={this.addName}/>
    <hr/>           
                <ul>
                    {name}
                </ul>
            </div>
        )
    }
}
