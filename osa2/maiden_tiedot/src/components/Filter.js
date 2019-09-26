import React, {} from 'react'
const Filter = ({countrys, searchCountry, setSearchCountry, Country}) => {
    let returnCountrys = countrys.filter(country => country.name.toLowerCase().includes(searchCountry.toString()))
      .map(country => country)

    if (returnCountrys.length < 11 && returnCountrys.length > 1) {
      // console.log(returnCountrys)

      return (
        returnCountrys.map(country => <form key={country.name}>{country.name}
          <button onClick={() => (setSearchCountry(country.name.toLowerCase()))}>show</button>
        </form>
        )
      )
    }
    else if (returnCountrys.length === 1) {
      let dataCountry = countrys.filter(country => country.name.toLowerCase().includes(searchCountry.toString()))
      return (
        <Country country={dataCountry} searchCountry={searchCountry} />
      )
    }
    else if (returnCountrys.length > 10) {
      return (
        <div>Too many matches, specify another filter</div>
      )
    }
    else {
      return <div>no results</div>
    }

  }
  export default Filter