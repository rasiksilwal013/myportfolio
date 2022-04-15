import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/rasik.silwal.9" target="black"><FaFacebookSquare/></a>
        <a href="" target="black"><FaInstagram/></a>
        <a href="" target="black"><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials