import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mahalo Salmon Restaurant Website by ReactJS",
    github: 'https://github.com/tripplen23/mahaloRestaurant',
    demo: 'http://mahalosalmon.online/',
  },
  {
    id: 2,
    image: IMG2,
    title: "Music Player by HTML/CSS/Javascript From Scratch",
    github: 'https://github.com/tripplen23/MusicPlayer',
    demo: 'https://github.com/tripplen23/MusicPlayer',
  },
  {
    id: 3,
    image: IMG3,
    title: "Figma Idea For Synchronize Recording Studio Website",
    github: 'https://www.figma.com/proto/kzHBSMmB9DQnwI6keJBgnU/Synchronize-Website?node-id=110%3A656',
    demo: 'https://www.figma.com/proto/kzHBSMmB9DQnwI6keJBgnU/Synchronize-Website?node-id=110%3A656',
  },
  {
    id: 4,
    image: IMG4,
    title: "Binh Nguyen's personal portfolio website by ReactJS",
    github: 'https://github.com/tripplen23/Portfolio',
    demo: 'https://nguyenducbinh.me',
    
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title,github, demo}) => {
         return (
          <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn'target='_blank' rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
         ) 
        })
      }
      </div>
    </section>
  )
}

export default Portfolio