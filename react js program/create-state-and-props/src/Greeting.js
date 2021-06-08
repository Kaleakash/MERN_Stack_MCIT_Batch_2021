import React from 'react';
class Greeting extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.signedIn){
            return <div>Welcome User {this.props.name}</div>
        }else {
            return <div>you can't signIn Please create account</div>
        }

    }
}
export default Greeting;