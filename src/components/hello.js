import React from 'react'

const hello =()=>{
    // return(
    //     <div className='dummyClass'>
    //         <h1>hello JSX</h1>
    //     </div>
    // );
    return React.createElement('div',
    {id:'hello',className:'dummyClass'},
    React.createElement('h1',null,'hello non jsx'))
}


export default hello