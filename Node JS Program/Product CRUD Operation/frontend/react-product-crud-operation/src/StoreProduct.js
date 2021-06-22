import React, { Component } from 'react'
import axios from 'axios';
export default class StoreProduct extends Component {
    constructor(props){
        super(props);
        this.state = {pid:0,pname:"",price:0.0,msg:""}
    }
    handleChange= (event)=> {
   this.setState({[event.target.name]:event.target.value});     
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.state);
        let product = this.state;
        let url = `http://localhost:9999/storeProductDetails`
        axios.post(url,product).
        then(result=>this.setState({msg:result.data})).
        catch(error=>console.log(error))
    }
    render() {
        return (
            <div>
                <h2>Store Product Details</h2>
            <form onSubmit={this.handleSubmit}>
            <label>PId</label>
            <input type="text" name="pid" onChange={this.handleChange}/><br/>
            <label>PName</label>
            <input type="text" name="pname" onChange={this.handleChange}/><br/>
            <label>Price</label>
            <input type="text" name="price" onChange={this.handleChange}/><br/>
            <input type="submit" value="Store Product"/>
            <input type="reset" value="reset"/>
            </form>            
            <br/>
            {this.state.msg}
            </div>
        )
    }
}
