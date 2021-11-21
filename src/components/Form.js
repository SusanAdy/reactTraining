import React, { Component } from 'react'
import './form.css'
 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              username:'',
              comment:'',
              topic:'',
              radioValue: ''
         }
     }
     handleUserNameChange=(event)=>{
         this.setState({
             username: event.target.value 
         })
     }
     handleCommentChange=(event)=>{
         this.setState({
             comment: event.target.value
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
         alert(`${this.state.username} ${this.state.comment} ${this.state.topic} ${this.state.radioValue}`)
         event.preventDefault()
     }
     
    render() {
        return (
            <form className='form1' onSubmit={this.handleSubmit}>
                <div className='container'>
                    <div>
                        <label className="label1">Username</label>
                    </div>
                    <input className="padd" type= 'text' value={this.state.username} onChange={this.handleUserNameChange}></input>
                    <br/>

                    <div>
                        <label className="label1">comments</label>
                    </div>        
                    <textarea className="padd" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                    <br/>
                    <div>
                         <label className="label1">topic</label>
                    </div>
                   
                    <select  value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">react</option>
                        <option value="angular">angular</option>
                        <option value="vue">vue</option>  
                    </select>
                    <br/>

                    <input type="radio" value={this.state.radioValue} onClick={this.handleRadioChange}/>
                    <label for="react">React</label>
                    <input type="radio" value={this.state.radioValue} onClick={this.handleRadioChange}/>
                    <label for="angular">angular</label>
                    <input type="radio" value={this.state.radioValue} onClick={this.handleRadioChange}/>
                    <label for="vue">vue</label>
                <br/>
                    <button type='submit'>Submit</button>
                <br/>
                </div>
            </form>
        )
    }
}

export default Form
