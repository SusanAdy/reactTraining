import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('click the button')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>clickme</button>
            </div>
        )
    }
}

export default ClassClick
