import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
        <div className='container header_container'>
            <h5>Hello I'm</h5>
            <h1>Rasik Silwal</h1>
            <h5 className='text-light'>Front-End Developer || Contet Writer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className='me'>
                <img src={ME} alt="me" />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header