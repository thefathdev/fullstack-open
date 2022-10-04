import React from 'react'

const PersonForm = ({
  onSubmit,
  handleName,
  handlePhoneNumber,
  name,
  phoneNumber,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">name: </label>
        <input id="name" value={name} onChange={handleName} />
      </div>
      <div>
        <label htmlFor="phoneNumber">number: </label>
        <input
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
