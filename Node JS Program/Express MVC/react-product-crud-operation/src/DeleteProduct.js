import axios from 'axios';
import React, { Component } from 'react'

export default class DeleteProduct extends Component {
    constructor(props){
        super(props);
        this.state  = {pid:0,msg:""}
    }
    handleChange = (event)=> {
        this.setState({pid:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        let pid = this.state.pid;
        let url =`http://localhost:9999/deleteProductById/${pid}`
        axios.delete(url).
        then(result=>this.setState({msg:result.data})).
        catch(error=>console.log(error))
    }
    render() {
        return (
            <div>
                <h2>Delete Record using Product Id</h2>
            <form onSubmit={this.handleSubmit}>
            <label>PId</label>
            <input type="text" name="pid" onChange = {this.handleChange}/><br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
            </form>               
            <br/>
            {this.state.msg} 
            </div>
        )
    }
}
