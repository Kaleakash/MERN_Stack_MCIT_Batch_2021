import axios from 'axios';
import React, { Component } from 'react'
export default class UpdateProduct extends Component {
    constructor(props){
        super(props);
        this.state = {pid:0,price:0.0,msg:""}
    }
    handleChange = (event)=> {
        this.setState({[event.target.name]:event.target.value});
    }
    handleSubmit = (event)=> {
    event.preventDefault();
    //console.log(this.state);
    let url ="http://localhost:9999/updateProductPriceById";
    let updateProduct = this.state;
    axios.put(url,updateProduct).
    then(result=>this.setState({msg:result.data})).
    catch(error=>console.log(error))
    }
    render() {
        return (
            <div>
            <h2>Update Product Price</h2>
            <form onSubmit={this.handleSubmit}>
            <label>PId</label>
            <input type="text" name="pid" onChange={this.handleChange}/><br/>
            <label>Price</label>
            <input type="text" name="price" onChange={this.handleChange}/><br/>
            <input type="submit" value="Update Product"/>
            <input type="reset" value="reset"/>
            </form>   
            <br/>
            {this.state.msg}
            </div>
        )
    }
}
