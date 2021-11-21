import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        return this.state.isLoggedIn?
        <div>welcome user</div>:
        <div>welcome user2</div>
    //     let message ;
    //     if(this.state.isLoggedIn){
    //         message=<div>welcome user</div>
    //     }else{
    //         message=<div>welcome guest</div>        
    //     }
    //     return <div>{message}</div>
    }
}

export default UserGreeting
