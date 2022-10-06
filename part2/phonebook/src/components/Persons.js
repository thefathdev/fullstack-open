import React from 'react'

const Persons = ({ persons, onClick }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} <span>{person.number} </span>
          </p>
          <button onClick={() => onClick(person.id, person.name)}>
            delete
          </button>
        </div>
      ))}
    </>
  )
}

export default Persons
