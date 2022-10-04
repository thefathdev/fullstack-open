import React from 'react'

const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <p key={person.id}>
          {person.name} <span>{person.number}</span>
        </p>
      ))}
    </>
  )
}

export default Persons
