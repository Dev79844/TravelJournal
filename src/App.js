import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Place from './components/Place'
import places from './data'

const App = () => {
  const place = places.map(entry => 
  <Place 
    country={entry.country}
    name = {entry.name}
    date={entry.date}
    content={entry.content}
    img={entry.img} 
  />)
  return (
    <div>
        <Navbar />
        {place}
    </div>
  )
}

export default App