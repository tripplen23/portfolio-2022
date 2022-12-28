import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About__Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months of Seft-taught front-end Web Devevelop</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed projects</small>
            </article>
          </div>

          <p>
          As a curious person, I would like to discover or create something new based on my knowledge. Luckily, this era is quite open to many people like me by the development of technology. <br />
          My mission is to bring the aesthetic values to our users or as well as I would like to give this World big visual perspectives through the eyes of a programming artist.
          </p>

          <a href="#contact" className='btn btn__primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About