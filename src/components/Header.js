import React from 'react';
import { useState } from 'react'
//import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg'
import "./header.css"
import { NavLink } from 'react-router-dom'

// import link
import { Link } from 'react-router-dom';

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );
  
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  return (
    <header className='py-6 mb-12 border-b'>
      <nav className='navbar z-10'>
        <div className='container'>
          <Link to='/'>
              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-dark">Roberto Silveira</span>
          </Link>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/sobrenos">Sobre nós</NavLink>
              </li>
              <li>
                <NavLink to="/imoveis">Imóveis</NavLink>
              </li>
              <li>
                <NavLink to="/contato">Contato</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
