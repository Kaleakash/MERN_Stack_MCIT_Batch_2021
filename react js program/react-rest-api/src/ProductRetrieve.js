import React, { Component } from 'react'
import axios from 'axios';
export default class ProductRetrieve extends Component {
    constructor(props){
        super(props);
        this.state = {product:[]}
    }
    componentDidMount(){
        axios.get("http://localhost:3000/product").
        then(result=>this.setState({product:result.data})).
        catch(e=>console.log(e));
    }
    render() {
     const productRow = this.state.product.map(p=>
        <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.pname}</td>
            <td>{p.price}</td>
        </tr>
        )   
        return (
            <div>
                <h2>All product details are</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                               <th>Product Name</th>
                            <th>Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productRow}
                    </tbody>
                </table>            
            </div>
        )
    }
}
