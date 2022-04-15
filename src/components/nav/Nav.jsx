import React from 'react'
import './nav.css'
import { AiFillHome} from 'react-icons/ai'
import { FaUserAlt} from 'react-icons/fa'
import { ImBook} from 'react-icons/im'
import { MdAssignmentTurnedIn} from 'react-icons/md'
import { MdContactMail} from 'react-icons/md'
import{useState} from 'react'



const Nav = () => {

  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
      <a href="#experiences" onClick={()=> setActiveNav('#experinces')} className={activeNav === '#experinces' ? 'active' : ''}><ImBook/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdAssignmentTurnedIn/></a>
      <a href="#contact" onClick={()=> setActiveNav('##contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactMail/></a>
    </nav>
  )
}

export default Nav