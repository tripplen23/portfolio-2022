import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/tina.jpg'
import AVTR2 from '../../assets/avatar2.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Nguyen',
    review: "Professional cooperation style. Recommended!"
  },
  {
    avatar: AVTR2,
    name: 'Alec Green',
    review: "A person with high enthusiasm in whatever he does, I worked with him in the music industry, and really surprised to know he is a technical student, wow, cannot wait what would he make in the future, hope there would be something good on my friend's career path."
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
        data.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonials'>
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
                {review}
              </small>
            </SwiperSlide>            
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials