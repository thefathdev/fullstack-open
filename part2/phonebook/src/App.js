import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newObject = {
      name: newName,
      number: newPhoneNumber,
      id: persons.length + 1,
    }

    if (persons.some((person) => person.name === newObject.name)) {
      alert(`${newName} is already added to phonebook`)
    } else if (persons.some((person) => person.number === newObject.number)) {
      alert(`${newPhoneNumber} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newObject))
      setNewName('')
      setNewPhoneNumber('')
    }
  }

  const handleFilter = (e) => setFilter(e.target.value)

  const handleNewName = (e) => setNewName(e.target.value)
  const handleNewPhoneNumber = (e) => setNewPhoneNumber(e.target.value)

  const personsToShow = Boolean(filter)
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={handleSubmit}
        name={newName}
        handleName={handleNewName}
        phoneNumber={newPhoneNumber}
        handlePhoneNumber={handleNewPhoneNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App
