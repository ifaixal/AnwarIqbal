import React, {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className='NavigationBar'>
        
        <div className="logo">
            <a href="#">Anwar</a>
        </div>

        <div className="links">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Testimonial">Testimonial</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>

        <div className="hamburgerIcon" onClick={toggleMenu}>
            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>

        <Menu isOpen={isOpen} toggleMenu={toggleMenu}/>
    </div>
  )
}

const Menu = ({isOpen,  toggleMenu}) => {

    return(
        <div className={`menu ${isOpen ? "open" : ""}`}>
            <ul>
                <li><a href="#Home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#Services" onClick={toggleMenu}>Services</a></li>
                <li><a href="#Testimonial" onClick={toggleMenu}>Testimonial</a></li>
                <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar