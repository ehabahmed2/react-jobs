import React from 'react'
import logo from '../assets/images/react.svg'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
  const [showLinks, setShowLinks] = useState(false)


  const activeLinkPage = ({isActive}) => {
    return isActive ?'bg-brand-light  hover:text-white px-3 py-2 rounded-md transition-colors duration-200' 
    :'hover:bg-brand-light  hover:text-white px-3 py-2 rounded-md transition-colors duration-200'
  }


  return (
    <nav className="bg-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-white font-bold text-xl">
            <NavLink to="/"><img src={logo} /></NavLink>
          </div>

          {/* Links */}

          <ul className="hidden md:flex space-x-4 text-neutral-light">
            <li><NavLink to="/" className={activeLinkPage}>Home</NavLink></li>
            <li><NavLink to="/jobs" className={activeLinkPage}>Jobs</NavLink></li>
            <li><NavLink to="/about" className={activeLinkPage}>About</NavLink></li>
          </ul>


          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={()=> {setShowLinks(preveStat => !preveStat)}}
            className="text-white focus:outline-none">
              {showLinks ? '✕' : '☰'}
            </button>            
            
          </div>
        </div>
      </div>
      {/* Mobile Links with transition */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          showLinks ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col space-y-4 px-4 pb-4 text-neutral-light">
          <li><NavLink to="/" className={activeLinkPage}>Home</NavLink></li>
          <li><NavLink to="/jobs" className={activeLinkPage}>Jobs</NavLink></li>
          <li><NavLink to="/about" className={activeLinkPage}>About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
