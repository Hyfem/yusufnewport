import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'; 
import './index.css'
import AnimatedLetter from '../AnimatedLetters'

const Home = () => {
  const [letterClass] = useState('text-animate');
  const greetArray = [' W','e','l','c','o','m','e']
  const nameArray = [
    'I',
    '',
    'A',
    'M',
    '',
    'H',
    'Y',
    'F',
    'E',
    'M']


  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={`${letterClass} _13`}>He</span> 
            <span className={`${letterClass} _14`}>llo , <br/>  </span> 

              <AnimatedLetter letterClass={letterClass}
              strArray={greetArray} idx={15}/> <br/> 

              <AnimatedLetter letterClass={letterClass}
              strArray={nameArray} idx={22}/>
              
            </h1>
            <h2>
                FRONTEND WEB DEVELOPER,
                I am avilable to work remotely and 
                hybrid  and freelance.
            </h2>
            <nav>
             <NavLink exact='true' activeclassname='active' to="/Projects" className='flat-button'>CHECK PROJECTS</NavLink>

            </nav>
        </div>
    </div>
  )
}
export default Home;
