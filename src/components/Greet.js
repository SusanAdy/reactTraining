import React from 'react'

const Greet =props=>{
    console.log(props)
    return (
    <div>
        <h1>hello {props.name} aka {props.heroname}</h1>
        {props.children}
    </div>
    )
    
}
export default Greet 
