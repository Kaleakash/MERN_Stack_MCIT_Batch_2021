import React from 'react';
class Customer extends React.Component{
    constructor(props){
        super(props);
this.state = {cid:100,cname:"Raju",age:21,order:
{oid:1122,odate:new Date(),pid:12345},
products:["TV","Computer","Laptop","Desktop"]}
    }
  render() {
        const product = this.state.products.map(p=><li>{p}</li>) 
        return(
            <>
                <h2>Customer details is </h2>
                CId is {this.state.cid}<br/>
                CName is {this.state.name}<br/>
                Age is {this.state.age}<br/>
                Order Id is {this.state.order.oid}<br/>
                Order Date is {this.state.order.odate.toString()}<br/>
                Product Id is {this.state.order.pid}<br/>
                Product are {this.state.products}<br/>
                Product are<br/>
                <ul>
                    {product}
                </ul>
            </>
        )
    }
}
export default Customer;