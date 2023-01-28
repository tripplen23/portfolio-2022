import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className = 'cta'>
        <a href={CV} download className='btn' style={{ 'margin' : '5px' }}>Download CV</a>
        <a href="#contact" className='btn btn-primary' style={{ 'margin' : '5px' }}>Let's talk</a>
    </div>
  )
}

export default CTA