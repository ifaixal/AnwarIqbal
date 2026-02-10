import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'

const App = () => {
  
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App