import React from 'react';
import axios from 'axios';
import ProductRetrieve from './ProductRetrieve';
class ProductStore extends React.Component {
    constructor(props){
        super(props);
        this.state = {id:0,pname:"",price:0.0}
    }
    handleChange=(event)=> {
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        //console.log(this.state)
        let productInfo = this.state;
        axios.post("http://localhost:3000/product",productInfo).
        then(result=>console.log(result)).catch(e=>console.log(e));
    }
    render() {
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>PId</label>
        <input type="text" name="id" onChange={this.handleChange}/><br/>
                <label>Product Name</label>
        <input type="text" name="pname" onChange={this.handleChange}/><br/>
                <label>Product Price</label>
        <input type="text" name="price" onChange={this.handleChange}/><br/>
                <input type="submit" value="Store Product"/>
                <input type="reset" value="Reset"/>
            </form>
            <hr/>
            <ProductRetrieve></ProductRetrieve>
            </>
        )
    }
}
export default ProductStore;