import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        this.state = {cname:"Vijay Kumar"}
        //you can write insider constructor or life cycle 
        //using event you can pass
        this.props.childToParent(this.state.cname);
    }
    render() {
        return (
            <div>
               <h2>This is child component</h2> 
Parent name in child component is {this.props.parentToChild}<br/>
The child name in child component is {this.state.cname}
            </div>
        )
    }
}
