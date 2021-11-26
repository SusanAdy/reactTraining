import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('Child')}>greetParent</button>
            <h1>
                this is a change
            </h1>
        </div>
    )
}

export default ChildComponent
