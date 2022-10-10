import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import {
  getAllPerson,
  addPerson,
  deletePerson,
  updatePerson,
} from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(true)

  useEffect(() => {
    getAllPerson().then((res) => {
      setPersons(res)
    })
  }, [])

  const saveNewPerson = (newPerson) => {
    addPerson(newPerson)
      .then((res) => {
        setPersons(persons.concat(res))
        setNewName('')
        setNewPhoneNumber('')
        setSuccess(true)
        setMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setMessage('')
        }, 3000)
      })
      .catch((error) => {
        setSuccess(false)
        setMessage(`${error.response.data.error}`)
        setTimeout(() => {
          setMessage('')
        }, 3000)
      })
  }

  const updateNumber = (updatedPerson) => {
    const person = persons.find((person) => person.name === updatedPerson.name)
    updatePerson(person.id, updatedPerson).then((res) => {
      setPersons(persons.map((p) => (p.id !== res.id ? p : res)))
      setNewName('')
      setNewPhoneNumber('')
      setSuccess(true)
      setMessage(`Changed ${updatedPerson.name}'s phone number`)
      setTimeout(() => {
        setMessage('')
      }, 3000)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newObject = {
      name: newName,
      number: newPhoneNumber,
    }

    if (persons.some((person) => person.name === newObject.name)) {
      if (
        window.confirm(
          `${newObject.name} is already added to phonebook, replace the old number with new one ?`
        )
      ) {
        updateNumber(newObject)
      }
    } else {
      saveNewPerson(newObject)
    }
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      deletePerson(id)
        .then((res) => {
          setSuccess(true)
          setMessage(`Deleted ${name}`)
          setTimeout(() => {
            setMessage('')
          }, 3000)
        })
        .catch((err) => {
          setSuccess(false)
          setMessage(
            `Information of ${name} has already been removed from the server`
          )
          setTimeout(() => {
            setMessage('')
          }, 3000)
        })
      setPersons(persons.filter((person) => person.id !== id))
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
      <Notification text={message} success={success} />
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
      <Persons persons={personsToShow} onClick={handleDelete} />
    </div>
  )
}

export default App
