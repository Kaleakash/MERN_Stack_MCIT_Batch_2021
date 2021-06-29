import React, { Component } from 'react'
import axios from 'axios';
export default class ProductDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {products:[]}
    }
    componentDidMount() {
        let url =`http://localhost:9999/allProducts`;
        axios.get(url).
        then(result=>this.setState({products:result.data})).
        catch(err=>console.log(err))
    }
    render() {
    let product = this.state.products.map(p=>
        <tr key={p.pid}>
            <td>{p.pid}</td>
            <td>{p.pname}</td>
            <td>{p.price}</td>
        </tr>
        )
        return (
            <div>
               <h2>Display All Product Details</h2> 
               <table border="1">
                   <thead>
                       <tr>
                           <th>PId</th>
                           <th>PName</th>
                           <th>Price</th>
                       </tr>
                   </thead>
                   <tbody>
                        {product}
                   </tbody>
               </table>
            </div>
        )
    }
}
