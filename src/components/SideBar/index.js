
import { NavLink } from 'react-router-dom'
import './index.css';
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';


const SideBar = () => {

  const [nav, setNav] = useState(false); 

  const handleNav = () => setNav(!nav);

  return (
  <div className={nav ? 'nav-bar active' : 'nav-bar'}>
    

    <nav>
      <NavLink exact='true' activeClassName='active' className='active' to='/' >
      <FontAwesomeIcon icon={ faHome } color='#703489' />

      </NavLink>
      <NavLink exact='true' activeClassName='active' className='about-link' to='/about' >
      <FontAwesomeIcon icon={ faUser} color='#703489' />

      </NavLink>
      <NavLink exact='true' activeClassName='active' className='contact-link' to='/contact' >
      <FontAwesomeIcon icon={ faEnvelope} color='#743089' />

      </NavLink>
    </nav>
    <ul>
      <li>
        <a 
           target='_blank'
           rel='noreferrer' 
           href='https://github.com'
        >
          <FontAwesomeIcon icon={ faGithub } color='#743089' />
        </a>
      </li>
      <li>
        <a 
           target='_blank'
           rel='noreferrer' 
           href='https://www.linkedin.com/in/yusuf-ayinde-a9251a297/'
        >
          <FontAwesomeIcon icon={ faLinkedin } color='#743089' />
        </a>
      </li>
      <li>
        <a 
           target='_blank'
           rel='noreferrer' 
           href='https://x.com/Hyfem_Box'
        >
          <FontAwesomeIcon icon={ faXTwitter } color='#743089' />
        </a>
      </li>
    </ul>
    <div className='hamburger' onClick={handleNav}>
      {!nav ?(<FaHamburger className='icon' />) : (<AiOutlineClose   style={{color: '#000'}} />)}

                
    </div>
    
    
  </div>
  )
}

export default SideBar;
