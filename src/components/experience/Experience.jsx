import React from 'react'
import './experience.css'
import {FaHtml5} from 'react-icons/fa'
import {ImCss3} from 'react-icons/im'
import {DiJavascript1} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {ImBlogger} from 'react-icons/im'


const Experience = () => {
  return (
    <section id='experiences'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
      <h3>Frontend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
        <FaHtml5 className='experience__details_icons'/>
        <div>
          <h4>HTML</h4>
        <small className='text-light'>80%</small>
        </div>
        
        </article>

        <article className='experience__details'>
        <ImCss3 className='experience__details_icons'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>80%</small>
        </div>
        
        </article>

        <article className='experience__details'>
        <DiJavascript1 className='experience__details_icons'/>
        <div>
        <h4>JAVASCRIPT</h4>
        <small className='text-light'>80%</small>
        </div>
        
        </article>

        <article className='experience__details'>
        <FaReact className='experience__details_icons'/>
        <div>
        <h4>REACT</h4>
        <small className='text-light'>80%</small>
        </div>
        
        </article>

        <article className='experience__details'>
        <BsFillBootstrapFill className='experience__details_icons'/>
        <div>
        <h4>BOOTSTRAP</h4>
        <small className='text-light'>80%</small>
        </div>
        
        </article>

        
      </div>
        </div>
        <div className='experience__contentwriter'>
        <h3>Content Writing</h3>
      <div className='experience__content'>
        <article className='experience__details'>
        <ImBlogger className='experience__details_icons'/>
       <div>
       <h4>Blog writting at <a href='https://www.merorating.com/blog' target="_blank">Mero Rating</a></h4>
       <small className='text-light'>Part Time</small>
       </div>
        
        </article>
        </div>
          
        </div>

      </div>
    </section>
  )
}

export default Experience