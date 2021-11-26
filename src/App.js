import React,{ Component } from 'react';  
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
// import { Routes , Route } from "react-router-dom";
// import Home from "./components/Pages/Home"
// import Address from "./components/Pages/Address"
// import Navbar from './components/Navbar'
// import ComboBox1 from './components/ComboBox1';

class App extends Component{  
  render(){
    return(
      <div className="App">
        <Form/>
        {/* <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/address" element={<Address/>}></Route>
        </Routes> */}
        {/* <ComboBox1/> */}
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
