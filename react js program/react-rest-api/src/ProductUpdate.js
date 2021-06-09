import React, { Component } from 'react'
import axios from 'axios';

export default class ProductUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {id:0,pname:"",price:0}
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        let productUpdateInfo = this.state;
    axios.put("http://localhost:3000/product/"+this.state.id,
    productUpdateInfo).then(result=>console.log(result)).
    catch(e=>console.log(e));
    }
    render() {
        return (
            <div>
                <h2>Update Product Details</h2>
                <form onSubmit={this.handleSubmit}>
                <label>PId</label>
        <input type="text" name="id" onChange={this.handleChange}/><br/>
                <label>Product Name</label>
        <input type="text" name="pname" onChange={this.handleChange}/><br/>
                <label>Product Price</label>
        <input type="text" name="price" onChange={this.handleChange}/><br/>
                <input type="submit" value="Update Product"/>
                <input type="reset" value="Reset"/>
            </form> 
            </div>
        )
    }
}
