import React, { Component } from 'react'
import { MyConsumer } from './MyContext'

export default class Child2 extends Component {
    render() {
        return (
            <div>
                <h2>Child2 Component</h2>
Name is <MyConsumer>{obj=><span>{obj.pname}</span>}</MyConsumer>
            </div>
        )
    }
}
