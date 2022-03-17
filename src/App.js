import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(false)

  const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(2)

  const fahrenheitToCelsius = (fahrenheit) =>
    (((fahrenheit - 32) * 5) / 9).toFixed(2)

  const check = (temparatuer) => {
    if (temparatuer < 15) {
      return 'cold'
    } else if (temparatuer >= 15 && temparatuer < 30) {
      return 'sunny'
    } else {
      return 'hot'
    }
  }
  const data = [
    {
      id: '1',
      date: '10-02-03',
      temparature: '30',
    },
    {
      id: '2',
      date: '10-03-03',
      temparature: '14',
    },
    {
      id: '3',
      date: '10-03-03',
      temparature: '16',
    },
    {
      id: '4',
      date: '10-04-03',
      temparature: '16',
    },
    {
      id: '5',
      date: '10-05-03',
      temparature: '-2',
    },
  ]

  return (
    <div className='App'>
      <button onClick={() => setCount(!count)}>
        {' '}
        {count ? 'Farenhite' : 'Celcius'}
      </button>

      {count
        ? data?.map((x) => (
            <>
              <div key={x.id}>
                <h1>Date: {x.date}</h1>
                <h1>
                  Temparature-in-Celcius:{fahrenheitToCelsius(x.temparature)}
                </h1>
                <h2>Temparature Info: {check(x.temparature)}</h2>
              </div>
            </>
          ))
        : data?.map((x) => (
            <>
              <div key={x.id}>
                <h1>Date:{x.date}</h1>
                <h1>
                  Temparature-In-FarenHeight:
                  {celsiusToFahrenheit(x.temparature)}
                </h1>
                <h2> Temparature Info:{check(x.temparature)}</h2>
              </div>
            </>
          ))}
    </div>
  )
}

export default App
