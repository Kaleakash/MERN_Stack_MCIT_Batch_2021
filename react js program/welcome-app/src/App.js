import React from "react" 

//Created component using Arrow style 
let Info = ()=><div>Welcome to Arrow style component</div>

//Created component using class tyle 
class MyClass extends React.Component{

    render(){

      return <div><Info/> <br/>This is Class component Example</div>
    }
}

// Created component using function style 
function Header() {
  return <div>This is header componnet</div>
}

let id =100;
let name="Ravi Kumar";
let result = false;
let obj = new Date();

let empInfo = {id:123,fname:"Ajay Kumar",age:21};
let students = ["Raj","Seeta","Raj","Reeta","Meeta","Meeta","Keeta","Veeta"];

function StudentInfo() {
  const std = students.map((s,i)=><li key={i}>{s}</li>)
  return <div>
          <h2>Student Name</h2>
          <ul>
            {std}
          </ul>
        </div>
}

function EmpInfo() {
  return <div>
          Id is {id}<br/> 
          Name is {name}<br/>
          Resul is {result?"Yes":"No"}<br/>
          Date info is {obj.toString()}<br/>
          Employee id is {empInfo.id}<br/>
          Employee name is {empInfo.fname}<br/>
          Age is {empInfo.age}
        </div>
}

let gallery=[{name:"banana",url:"https://media.gettyimages.com/photos/banana-bunch-picture-id173242750?k=6&m=173242750&s=612x612&w=0&h=QJB3WhqIWcF1umqELWFUVu32OJWCuePabFClaMfRWbo="},
            {name:"orange",url:"https://media.gettyimages.com/photos/closeup-of-orange-fruits-and-leaves-against-white-background-picture-id1147272135?k=6&m=1147272135&s=612x612&w=0&h=o8v5auQu_CZwqM15wVKP_2cuk3SRv8U27UtjS5rKmdY="},
            {name:"pipeapple",url:"https://media.gettyimages.com/photos/pineapple-wallpaper-picture-id172388455?k=6&m=172388455&s=612x612&w=0&h=_G3mU1Xm3MuOxVaBvk5qtqYjRUsGrMt9UIBoCdAKU3g="},
            {name:"grapes",url:"https://media.gettyimages.com/photos/black-grapes-picture-id171151560?k=6&m=171151560&s=612x612&w=0&h=F-pj7LY2EpfbT_ll9l4R7dWULyKOnxPqp3sKNYs0W_8="}
            ]

function Images() {
const fruit = gallery.map((g,index)=>
                <div key={index}>
                    <h3>{g.name}</h3>
                    <img src={g.url} width="100px" height="100px" alt="image not available"/>
                </div>)
  return   <div>
                {fruit}
           </div>
}
//console.dir(Images);
function Footer() {
  return <div>This is footer component</div>
}

export default function App(){
  return  <>
            <Header/>
            <p>Welcome to React JS using JSX</p>
            <MyClass/>
            <EmpInfo/><br/>
            <StudentInfo/>
            <Images/>
            <Footer></Footer>
          </>
}
