import React, { Component } from 'react'
import { MyConsumer, MyContext } from './MyContext'

export default class GrandChild extends Component {
    static contextType = MyContext;
    constructor(props){
        super(props);
        this.state = {parentName:""}
    }
    componentDidMount(){
        let obj = this.context;
        this.setState({parentName:obj.pname})
    }
    render() {
        return (
            <div>
                <h2>Grand Child Component</h2>
                Name is <MyConsumer>{obj=><span>{obj.pname}</span>}</MyConsumer> 
                <br/>
                Parent Name is {this.state.parentName}
            </div>
        )
    }
}
