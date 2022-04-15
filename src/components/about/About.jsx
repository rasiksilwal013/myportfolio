import React from 'react'
import './about.css'
import ME from '../../assets/aboutimg.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaTasks} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Ferret Out</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me_img'>
            <img src={ME} alt=" About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experienve</h5>
              <small>1+ years Experience</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ clients In Nepal</small>
            </article>

            <article className='about__card'>
              <FaTasks className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ projects completed</small>
            </article>
          </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis iste illo laborum quo omnis delectus natus. Non fuga ducimus inventore quo temporibus? Ea ut itaque nulla blanditiis expedita repudiandae quisquam.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Chat</a>



        </div>
      </div>
    </section>
  )
}

export default About