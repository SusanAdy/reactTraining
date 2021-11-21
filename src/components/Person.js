import React from 'react'

const tables={
    border: '1px solid black',
    width: '100%',

}
function Person({person}) {
    return (
         <div>
            <table style={tables} >
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                    <th>email</th>
                    <th>contact</th>
                </tr>  
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td>{person.address}</td>
                                <td>{person.email}</td>
                                <td>{person.contact}</td>
                            </tr>
            </table>
        </div>
    )
}

export default Person
