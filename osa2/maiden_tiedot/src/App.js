import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Country from './components/Country'
import axios from 'axios'

const App = () => {

  const [countrys, setCountrys] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    //console.log('effect')

    const eventHandler = response => {
      //console.log('promise fulfilled')
      setCountrys(response.data)
    }
    const promise = axios.get('https://restcountries.eu/rest/v2/all')
    promise.then(eventHandler)
  }, [])


  const handleCountrySearch = (event) => {
    event.preventDefault()
    setSearchCountry(event.target.value)
  }

  return (
    <div>
      <form>
        Find countries:  <input value={searchCountry}
          onChange={handleCountrySearch}
        />
      </form>
      <div>
        <Filter countrys={countrys} searchCountry={searchCountry} setSearchCountry={setSearchCountry} Country={Country}/>
      </div>
    </div>
  )
}

export default App;
