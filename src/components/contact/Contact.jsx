import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef ();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_nixr1ls', 'template_2hrevrrss', form.current, '81_BVr-iBY1hnMagz')

  e.target.reset()
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>

        
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rasiksilwal@gmail.com</h5>
            <a href="mailto:rasiksilwal@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rasik Silwal</h5>
            <a href="https://www.messenger.com/t/100004642603565" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Rasik Silwal</h5>
            <a href="https://api.whatsapp.com/send?phone=+9779841622925" target='_blank'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact