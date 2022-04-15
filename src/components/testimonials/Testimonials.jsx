import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data =[{
  avatar : AVTR1,
  name: 'Santosh Khadka',
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus porro officia aspernatur labore tempore nihil rerum consequatur officiis possimus facere dicta nobis, atque iusto veritatis aliquid magnam exercitationem unde."
},
{
  avatar : AVTR2,
  name: 'Santosh Khadka',
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus porro officia aspernatur labore tempore nihil rerum consequatur officiis possimus facere dicta nobis, atque iusto veritatis aliquid magnam exercitationem unde."
},
{
  avatar : AVTR3,
  name: 'Santosh Khadka',
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus porro officia aspernatur labore tempore nihil rerum consequatur officiis possimus facere dicta nobis, atque iusto veritatis aliquid magnam exercitationem unde."
},
{
  avatar : AVTR4,
  name: 'Santosh Khadka',
  review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus porro officia aspernatur labore tempore nihil rerum consequatur officiis possimus facere dicta nobis, atque iusto veritatis aliquid magnam exercitationem unde."
}

]


const Testimonials = () => {
  return (
   <section id='testimonials'>
     <h5>Review from caluege</h5>
     <h2>Testimonials</h2>
     <Swiper className='container testimonials__container'    // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
           {
             data.map(({avatar, name, review}, index) =>{
               return(
                <SwiperSlide key={index} className='tesnimonials'>
                <div className='client__avatar'>
                  <img src={avatar} alt="AVATAR One" />
                </div>
                <h5 className='cleint__name'>{name}</h5>
                  <small className='clients__review'>
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