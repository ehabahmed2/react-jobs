import React from 'react'
import logo from '../assets/images/react.svg'

function Nav() {
  const linkStyle =
    'hover:bg-brand-light  hover:text-white px-3 py-2 rounded-md transition-colors duration-200';

  return (
    <nav className="bg-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-white font-bold text-xl">
            <img src={logo} />
          </div>

          {/* Links */}
          <ul className="hidden md:flex space-x-4 text-neutral-light">
            <li><a href="#" className={linkStyle}>Home</a></li>
            <li><a href="#" className={linkStyle}>Jobs</a></li>
            <li><a href="#" className={linkStyle}>About</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
