import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
        {
            id:1,
            name:'Ankit',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Bruce',
            age:35,
            skill:'Angular'
        }

    ]
    const personList = persons.map(person => <Person person={person} />)
    return <div>{personList}</div>
       
    
}

export default NameList