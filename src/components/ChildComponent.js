import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler('Child')}>greetParent</button>
        </div>
    )
}

export default ChildComponent
