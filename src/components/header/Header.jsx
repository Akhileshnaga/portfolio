import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>

       <header>
           <div className="container header__container">
           <h5>Hello I'm</h5>
           <h1>Akhilesh Naga</h1>
           <h5 className="text-light"> FullStack Developer</h5>
           <CTA/>
           <HeaderSocials/>

           <div className='me'>
            <img src ={ME} alt="me"/>
           </div>

          
           </div>
       </header>
    </div>
  )
}

export default Header
