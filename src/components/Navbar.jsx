import React, { useCallback } from 'react';
import { NavLink } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Resume from './Resume';

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>
        <p className='nav-title'>
          <span className='nav-title-icon'>⚛️</span>
          Home
        </p>
      </NavLink>
      
      <div className='nav-links'>
        <NavLink className='nav-link' to='#/Resume'>Resume</NavLink>
        <NavLink className='nav-link' to='/About'>About</NavLink>
        <NavLink className='nav-link' to='/work'>Work</NavLink>
        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
      </div>
      </nav>
    
  )
}

export default Navbar