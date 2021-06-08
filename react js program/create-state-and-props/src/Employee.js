import React from 'react';
class Employee extends React.Component {
constructor(props){
    super(props);       // passing props to super class constructor 
}
    render(){

        return(
            <div>
                <h2>Employee Component</h2>
                Id is {this.props.id}<br/>
                Name is {this.props.name}<br/>
                Salary is {this.props.salary}<br/>
            </div>
        )
    }
}

export default Employee;