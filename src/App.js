import React,{ Component } from 'react';  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NameList from './components/NameList';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EasyUiForm from './components/EasyUIForm';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import Navbar from './components/Navbar';
import Form from './components/Form';

class App extends Component{  
  render(){
    return(
      <div className="App">
        <Form/>
        {/* <Navbar/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <ParentComponent/> */}
        {/* <EventBind/> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EasyUiForm /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet/>
        <Greet name='ADY' heroname='adhikari'>
          <p>this is children props</p>
        </Greet>
        <Hello/>
        <Welcome/>
        <Welcome name='ADY' heroname='adhikari'/> */}
      </div>  
    );
  }
}

export default App;
