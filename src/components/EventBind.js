import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    clickHandler(){
        this.setState({
            message: 'GoodBye'
        }) 
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={()=>this.clickHandler()}>click</button>
            </div>
        )
    }
}

export default EventBind
