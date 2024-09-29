import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('event_vm4GOa4a60VGM94kWONyqWYE', 'template_8aq38hi', form.current,  'https://dashboard.emailjs.com/')
    e.target.reset()
    
  };

  return (
    <section id='contact'>
      <h5 className='text-light'>CONTACT ME!</h5>
      <h2 className='text-light'>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>nagasikar@gmail.com</h5>
            <a href="mailto:nagasikar@gmail.com" >Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Akhilesh</h5>
            <a href="https://m.me/akhilesh.choudhry.148?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+918875502735</h5>
            <a href="https://api.whatsapp.com/send?phone=918875502735" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" required placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-primary">Send message</button><span>{''}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact