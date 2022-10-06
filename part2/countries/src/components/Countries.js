import React from 'react'
import Country from './Country'

const Countries = ({ countries, handleShow }) => {
  return (
    <div>
      {countries.length > 10 ? (
        'Too many matches, specify another filter'
      ) : countries.length > 1 ? (
        countries.map((country) => (
          <div key={country.altSpellings[0]}>
            <span>{country.name.common} </span>
            <button onClick={() => handleShow(country.name.common)}>
              show
            </button>
          </div>
        ))
      ) : (
        <Country country={countries[0]} />
      )}
    </div>
  )
}

export default Countries
