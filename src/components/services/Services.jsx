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
              <p>Sketching idea on Figma platform</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design vector on Adobe Illustrator</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX Researching</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User-centered design</p>
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
              <p>Build a website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Deploy a website</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>9 months of self-taught in HTML/CSS/Javscript.</p>
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
              <p>Experienced in Content Creation in Audio/Sound/Music field.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>5000 monthly listeners on Spotify.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content influencer, have knowledge in branding and labeling services</p>
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