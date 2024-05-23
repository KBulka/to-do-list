import React from 'react'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div> 
      <a href="https://github.com/KBulka/to-do-list">https://github.com/KBulka/to-do-list</a>

         <Link to="/"><div className='foot'>Powrót</div></Link>
    </div>
  )
}

export default About
