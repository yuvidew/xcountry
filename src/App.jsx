import React, { useEffect, useState } from 'react'

const App = () => {
  const [country , setCountry] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data))
    .catch(e => console.error(e))
  } , [])


  return (
    <section className='wrapper' >
      {country.length !==0 ? 
        country.map(ele => (
          <div 
            key={ele.name.common}
            className='div'
          >
              <img className='img' src={ele.flags.svg}  alt={ele.flags.alt} />
              <p>{ele.name.common}</p>
          </div>
        ))
      : 
      (
        <h1 >Loading...</h1>
      )}
    </section>
  )
}

export default App