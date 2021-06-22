import axios from 'axios';
import React, { Component } from 'react'
export default class FindProductById extends Component {
    constructor(props){
        super(props);
        this.state = {msg:""}
    }
    handleChange = (event)=> {
        let pid = event.target.value;
        if(pid.length==0){
            this.setState({msg:"Plz enter the id to search the records"})
        }else {
            let url =`http://localhost:9999/getProductDetailsById/${pid}`;
            axios.get(url).
            then(result=>this.setState({msg:result.data})).
            catch(error=>console.log(error))
        }
    }
    render() {
        return (
            <div>
            <h3>Find Product by Id</h3>
            Product Id <input type="text" name="pid" onChange={this.handleChange}/>
            <br/> 
            {this.state.msg}       
            </div>
        )
    }
}
