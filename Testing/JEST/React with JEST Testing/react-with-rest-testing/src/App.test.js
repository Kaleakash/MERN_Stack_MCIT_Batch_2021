import App from './App';
import Adapter  from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({adapter:new Adapter()})

describe("React Testing",()=> {
  it("Simple Test Render Message Testing",()=> {
    let obj = shallow(<App/>);      // load the App module in Enzyme environment
    let result = obj.find("h1").text(); 
    expect("Welcome to React JS Testing").toEqual(result);
  })

  it("State variable value in render function",()=> {
    let obj = shallow(<App/>);      // load the App module in Enzyme environment
    let result = obj.find("p").text(); 
    expect("Name is Ramesh").toEqual(result);
  })

  it("State variable directly access",()=> {
    let obj = shallow(<App/>);      // load the App module in Enzyme environment
    let ref = obj.instance();
    let result = ref.state.age; 
    expect(21).toEqual(result);
  })

  it("check function test",()=> {
    let obj = shallow(<App/>);      // load the App module in Enzyme environment
    let ref = obj.instance();     // creating the object of App component usign enzyme library 
    let result = ref.fun(); 
    expect("Welcome to React JS").toEqual(result);
  })

  it("Salary state variable testing before and after increment",()=> {
    let obj = shallow(<App/>);      // load the App module in Enzyme environment
    let ref = obj.instance();     // creating the object of App component usign enzyme library 
    let beforeSalary = ref.state.salary; 
    expect(beforeSalary).toEqual(12000);

    let buttonRef = obj.find("#b1");
    buttonRef.simulate("click");        // event fire on button 

    let afterSalary = ref.state.salary; 
    expect(afterSalary).toEqual(13000);

  })


})

