import React from 'react';
import ButtonComponent from './Buttons';
import Customer from './Customer';

import Employee from './Employee';
import Greeting from './Greeting';

function SayHello(props){
  return <div>Welcome {props.name}</div>
}

class App extends React.Component {

  render(){
    return(
      <div>
        <h1>Props and State Example</h1>
        {/* <SayHello name="Raj"/>
        <SayHello name="Ravi"/>
        <SayHello name="Ramesh"/>
        <Employee id="100" name="Ramesh" salary="12000"/>
        <Greeting name="Ajay" signedIn={true}></Greeting>
        <ButtonComponent type="submit" value="Submit"></ButtonComponent>
        <ButtonComponent type="reset" value="Reset"></ButtonComponent>
        <ButtonComponent type="button" value="Normal Button"></ButtonComponent>
        <ButtonComponent type="button" value="Click Button"></ButtonComponent>
    <ButtonComponent type="button" value="Db click Button"></ButtonComponent> */}
        <Customer></Customer>
      </div>
    )

  }
}

export default App;
