import React from 'react'
import './table.css'
function NameList() {
    const persons=[
        {
            id:1,
            name:'susan',
            email:'@gmail.com',
            address:'nayagau',
            contact:'33423432'
        },
        {
            id:2,
            name:'biswas',
            email:'@gmail.com',
            address:'kalikanagar',
            contact:'309898'
            
        },
        {
            id:3,
            name:'naruto',
            email:'@gmail.com',
            address:'japan',
            contact:'87987'
        }
    ]
    return (
        <div className='abc'>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>address</th>
                    <th>email</th>
                    <th>contact</th>
                </tr>  
                {persons.map((person,index)=>(
                    <tr key={index}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.address}</td>
                    <td>{person.email}</td>
                    <td>{person.contact}</td>
                </tr>
                ))}
                            
            </table>
        </div>
    )
}

export default NameList
