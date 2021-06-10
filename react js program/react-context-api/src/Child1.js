import React, { Component } from 'react'
import GrandChild from './GrandChild'
import { MyConsumer } from './MyContext'

export default class Child1 extends Component {
    render() {
        return (
            <div>
                <h2>Child1 Component</h2>
    Name is <MyConsumer>{obj=><span>{obj.pname}</span>}</MyConsumer>
                <GrandChild></GrandChild>
            </div>
        )
    }
}
