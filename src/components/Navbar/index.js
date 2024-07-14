import React, { useState } from 'react';
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {  faLinkedin, faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'; // Corrected icon import

import './index.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

    return (
        <div className={nav ? 'navBar navBar-bg' : 'navBar'}>
            

            <div className='hamburger' onClick={handleNav}>
                {!nav ? (<FaHamburger className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} />)}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
               

                <nav>
                    <NavLink exact activeClassName='active' className='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#703489' />
                    </NavLink>
                    <NavLink exact activeClassName='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#703489' />
                    </NavLink>
                    <NavLink exact activeClassName='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#743089' />
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'  
                            href='https://github.com'
                        >
                            <FontAwesomeIcon icon={faGithub} color='#743089' />
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer' 
                            href='https://www.linkedin.com/in/yusuf-ayinde-a9251a297/'
                        >
                            <FontAwesomeIcon icon={faLinkedin} color='#743089' />
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'  
                            href='https://x.com/Hyfem_Box'
                        >
                            <FontAwesomeIcon icon={faXTwitter} color='#743089' /> {/* Corrected icon name */}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
