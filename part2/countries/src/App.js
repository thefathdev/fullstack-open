import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data)
    })
  }, [])

  const countriesToShow = !Boolean(filter)
    ? []
    : countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )

  // console.log(countriesToShow)

  return (
    <>
      <div>
        <label htmlFor="countryName">find countries </label>
        <input
          id="countryName"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {countriesToShow.length !== 0 && (
        <Countries countries={countriesToShow} handleShow={setFilter} />
      )}
    </>
  )
}

export default App
