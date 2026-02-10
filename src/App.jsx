import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}

export default App