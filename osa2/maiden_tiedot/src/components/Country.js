import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Country = (props) => {
    const [weather, setWeather] = useState()
    useEffect(() => {
      const weatherEventHandler = response => {
        setWeather(response.data)
      }
      const promise = axios.get('http://api.weatherstack.com/current?access_key=bdeb98308023f7009a8798b4c55a38b0&query=' + props.searchCountry)
      promise.then(weatherEventHandler)
    
    }, [props.searchCountry])
    let w ={ temperature: 'unknown', wind_speed: 'unknown', weather_icons: 'https://something.somewhere.com/image.png', wind_dir: 'Somewhere'
    }
    //console.log(w)
    if(weather){
     w = weather.current
    }
    return (
      <div>
        <h1>{props.country[0].name}</h1>
        <p>
          <>Capital: {props.country[0].capital}</>
        </p>
        <p>
          <>Population: {props.country[0].population}</>
        </p>
        <h2>Languages</h2>
        <ul>
          {props.country[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <p>
          <img src={props.country[0].flag} alt="no flag" height="55" width="90"></img>
        </p>
        <div>
        <h2>Weather in {props.country[0].capital}</h2>
        </div>
        <p><b>Temperature: </b>{w.temperature} Celsius</p>
        <img src={w.weather_icons} alt={"no weather icon"} width="100px"/>
                <p><b>Wind: </b>{w.wind_speed} kph direction {w.wind_dir}</p>
      </div>
    )
  }
  export default Country