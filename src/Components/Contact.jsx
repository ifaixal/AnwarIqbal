import './Contact.css'
import React from 'react'

const Contact = () => {
  return (
    <div className='Footer' id='Contact'>
        <div className="footerTitle">
            <h1>Anwar Iqbal</h1>
        </div>

        <ul className='list'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Testimonial">Testimonials</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>

        <div className="linksSocial">
            <a className="freelancer" href='https://www.freelancer.pk/u/AnwarIqbal420' target='_blank'>
                <svg fill="white" width="48px" height="48px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.832 16.769l4.128 4.434 4.552-4.461 1.412-8.313-5.547-0.285zM9.323 16.254l4.37-8.15-12.689-0.689zM6.158 4.849l1.071 2.199 5.916 0.367zM17.772 4.848l-2.988 2.692 5.026 0.187zM7.881 27.152l5.591-5.466-3.364-3.611zM18.619 4.848l2.042 2.864 10.334-2.864z"></path>
                </svg>
            </a>
            <a className="facebook" href='https://www.facebook.com/anuuu.khan' target='_blank'>
                <svg fill="white" width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"/>
                </svg>
            </a>
            <a className="email" href="mailto:ana.anwar420@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you." target='_blank'>
                <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                </svg>
            </a>
        </div>

        <div className="copyright">
            <p>Copyright © 2026! All rights reserved!</p>
        </div>
    </div>
  )
}

export default Contact