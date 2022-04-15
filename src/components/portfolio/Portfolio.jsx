import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/scrypt.png'
import IMG2 from '../../assets/scrypt.png'
import IMG3 from '../../assets/scrypt.png'
import IMG4 from '../../assets/scrypt.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio_item'>
        <div className='portfolio__item_img'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Scrypt Spider WebPage</h3>
        <div className='portfolio_item-cta'>
        <a href='' target='_blank' className='btn'>Github</a>
        <a href='https://www.scryptspider.com/' target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>        
        </article>
        <article className='portfolio_item'>
        <div className='portfolio__item_img'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Maven Nepal</h3>
        <div className='portfolio_item-cta'>
        <a href='' target='_blank' className='btn'>Github</a>
        <a href='' target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>        
        </article>
        <article className='portfolio_item'>
        <div className='portfolio__item_img'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Mero Rating </h3>
        <div className='portfolio_item-cta'>
        <a href='' target='_blank' className='btn'>Github</a>
        <a href='' target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>        
        </article>
        <article className='portfolio_item'>
        <div className='portfolio__item_img'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Mero Rating Admin Panel</h3>
        <div className='portfolio_item-cta'>
        <a href='' target='_blank' className='btn'>Github</a>
        <a href='' target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>        
        </article>
        <article className='portfolio_item'>
        <div className='portfolio__item_img'>
          <img src={IMG1} alt="" />
        </div>
        <h3>Easy Cars (College Project)</h3>
        <div className='portfolio_item-cta'>
        <a href='' target='_blank' className='btn'>Github</a>
        <a href='' target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>        
        </article>
        <article className='portfolio_item'>
        <div className='portfolio__item_img'>
          <img src={IMG1} alt="" />
        </div>
        <h3>POrtfolio Title</h3>
        <div className='portfolio_item-cta'>
        <a href='' target='_blank' className='btn'>Github</a>
        <a href='' target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>        
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio