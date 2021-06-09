import React, { Component } from 'react'
import axios from 'axios';
export default class ProductDelete extends Component {
    
    constructor(props){
        super(props);
        this.state ={id:0,msg:""}
    }

    handleSubmit=()=> {

axios.delete("http://localhost:3000/product/"+this.state.id).
then(result=>{
    if(result.status==200){
        this.setState({msg:"Record deleted successfully..."})
    }
}).catch(e=>this.setState({msg:"Record didn't delete"}));
    }

    render() {
        return (
            <div>
                <form>
                <label>Product Id</label>
                <input type="text" name="id" 
                onChange={(event)=>this.setState({id:event.target.value})}/><br/>
                <input type="button" value="Delete Record" onClick={this.handleSubmit}/>
                </form><br/>
                {this.state.msg}
            </div>
        )
    }

}
