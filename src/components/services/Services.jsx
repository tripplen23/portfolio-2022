import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      {/* UX/UI */}
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>2/7 Google UX Course Certificate.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Elementary in Figma.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intermediate in Photoshop.</p>
            </li>
          </ul>
        </article>
        {/* Web dev */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>3 months self-taught in HTML.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>3 months self-taught in CSS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>3 months self-taught in Javascript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 months self-taught in ReactJS.</p>
            </li>
          </ul>
        </article>
        {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Experienced in Canva.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>5000 monthly listeners on Spotify.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>80 followers on Spotify</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>850 followers on Instagram</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services