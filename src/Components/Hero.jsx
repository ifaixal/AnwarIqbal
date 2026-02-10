import React from 'react'
import { ReactTyped } from "react-typed";
import './Hero.css'

const Hero = () => {
  return (
    <div className='HeroSection'>
        <div className="leftContainer">
          <div className="textArea">
            <ReactTyped
              strings={["Hi there! ", "Bonjour! ", "Hola! " ,"السلام علیکم"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
            <span className='Introduction'><h1 className='headingcolor'>ANWAR</h1> IS HERE TO BE YOUR ASSISTANCE</span>
            <p>Focus on growing your business while we handle the numbers.</p>
          </div>

          <div className="CTA">
            <button>Let's Discuss!</button>
          </div>
        </div>

        <div className="rightContainer">
          <img src="/Vector - 3.png" alt="img"/>
        </div>
    </div>
  )
}

export default Hero