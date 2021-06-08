import React from 'react'
class Login extends React.Component {
        constructor(props){
            super(props);
            this.state = {user:"",pass:""}
        }
        handleChange=(event)=> {
                        //console.log("Event fired...")
            /*let inputName = event.target.name;
            let inputValue = event.target.value;
            console.log(inputName+" "+inputValue)
            //this.setState({inputName:inputValue});  // setState is asynchronous
            /*switch(inputName){
                case "user":this.setState({user:inputValue})
                            break;
                case "pass":this.setState({pass:inputValue});
                            break;
            }
            this.setState({[inputName]:inputValue});*/
            this.setState({[event.target.name]:event.target.value});
        }
        handleSubmit=(event)=> {
                event.preventDefault();     //don't want to refresh
                console.log(this.state)
        }
        render(){
            return(
            <>
            <h2>Login Page</h2>
            <form onSubmit={this.handleSubmit}>
             <label>UserName</label>
             <input type="text" name="user" onChange={this.handleChange}/><br/>
             <label>Password</label>
             <input type="password" name="pass" onChange={this.handleChange}/><br/>
             <input type="submit" value="submit"/>
             <input type="reset" value="reset"/>   
            </form>
            </>
            )
        }
}
export default Login;