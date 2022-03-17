import React, { useState } from 'react';
import './App.css';




function App() {
  const [count, setCount] = useState(false)
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
    temparature: '31',
  },
]

  return (
    <div className='App'>
      <button onClick={() => setCount(!count)}>
        {' '}
        {count ? 'Celcius' : 'Farengite'}
      </button>

      {count
        ? data?.map((x) => (
            <>
              <div key={x.id}>
                <h1>{x.date}</h1>
                <h2>{x.temparature}</h2>
              </div>
            </>
          ))
        : 'false'}
    </div>
  )
}
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32

const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9

const chekc = (celsius) => { 
  if(celsius > 30) {
    return 'hot'
  }else if(celsius < 15){
    return 'cold'
  }else if(celsius >= 15 && celsius < 30){
    return 'sunny'
  }

 }

export default App;
