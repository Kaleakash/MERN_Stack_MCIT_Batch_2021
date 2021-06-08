import './App.css'
export default function ButtonComponent(props){
    return <input type={props.type} value={props.value} className="myButton"/>
}