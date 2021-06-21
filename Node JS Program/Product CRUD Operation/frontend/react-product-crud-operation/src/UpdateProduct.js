import React, { Component } from 'react'

export default class UpdateProduct extends Component {
    constructor(props){
        super(props);
        this.state = {pid:0,price:0.0}
    }
    handleChange = (event)=> {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit = (event)=> {
                event.preventDefault();
    }
    render() {
        return (
            <div>
            <h2>Update Product Price</h2>
            <form onSubmit={this.handleSubmit}>
            <label>PId</label>
            <input type="text" name="pid"/><br/>
            <label>Price</label>
            <input type="text" name="price"/><br/>
            <input type="submit" value="Update Product"/>
            <input type="reset" value="reset"/>
            </form>   
            </div>
        )
    }
}
