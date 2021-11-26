import React, { Component } from 'react'
import './form.css'
 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              email:'',
              topic:'react',
              radioValue: ''   
         }
     }
     handleUserNameChange=(event)=>{
         this.setState({
             username: event.target.value 
         })
     }
     handleEmailChange=(event)=>{
         this.setState({
             email: event.target.value
         })
     }
     handleTopicChange=(event)=>{
         this.setState({
             topic: event.target.value
         })
     }
    handleRadioChange=(event)=>{
        this.setState({
            radioValue: event.target.value
        })
    }
     handleSubmit=(event)=>{
         alert(`${this.state.username} ${this.state.email} ${this.state.topic} ${this.state.radioValue}`)
         event.preventDefault()
     }
     
    render() {
        console.log(this.state.email)
        return (
            <form className='form1' onSubmit={this.handleSubmit}>
                <div className='container'>
                    <div>
                        <label className="label1">Username</label>
                    </div>
                    <input className="padd" type= 'text' value={this.state.username} onChange={this.handleUserNameChange}></input>
                    <br/>

                    <div>
                        <label className="label1">Email</label>
                    </div>        
                    <input className="padd" value={this.state.email} onChange={this.handleEmailChange}/>
                    <br/>
                    <div>
                        <label className="label1">topic</label>
                   
                    <select  value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>  
                    </select>
                    </div>
                    <br/>

                    <input type="radio" name="a" value="react" onClick={this.handleRadioChange}/>
                    <label htmlFor="react">React</label>
                    <input type="radio" name="a" value="angular" onClick={this.handleRadioChange}/>
                    <label htmlFor="angular">angular</label>
                    <input type="radio" name="a" value="vue" onClick={this.handleRadioChange}/>
                    <label htmlFor="vue">vue</label>
                <br/>
                    <button type='submit'>Submit</button>
                <br/>
                </div>
            </form>
        )
    }
}

export default Form
