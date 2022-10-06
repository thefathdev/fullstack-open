import React, { useEffect, useState } from 'react'
import axios from 'axios'

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const Country = ({ country }) => {
  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=${apiKey}`
  // console.log(url)
  const [weather, setWeather] = useState('')

  useEffect(() => {
    axios.get(url).then((res) => {
      setWeather(res.data)
    })
  }, [url])

  const weatherIcon = weather
    ? `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    : ''

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h3>languages: </h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img
        width="320"
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
      />
      <h2>Weather in {country.capital[0]}</h2>
      {weather && (
        <div>
          <p>
            temperature {Math.trunc((weather.main.temp - 273.15) * 100) / 100}{' '}
            Celcius
          </p>
          {weatherIcon && (
            <img src={weatherIcon} alt={weather.weather[0].main} />
          )}
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  )
}

export default Country
