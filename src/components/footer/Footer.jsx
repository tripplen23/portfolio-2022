import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Binh Nguyen</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio<">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/tripplen23" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://www.instagram.com/fenfhnib/" target="_blank" rel='noreferrer'><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/duc-binh-nguyen-3b4839168/" target="_blank" rel='noreferrer'><FaLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Binh Nguyen. All rights reserved</small>
      </div>
      
    </footer>
  )
}

export default Footer