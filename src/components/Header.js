import React from 'react';
import { useState } from 'react'
import "./header.css"
import { NavLink } from 'react-router-dom'
import Logo from '../assets/img/logo-header.png';

// import link
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };
  const [showNavbar, setShowNavbar] = useState(false)

  
  const Dropdown = ({ open, trigger, menu }) => {
    return (
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">{menuItem}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

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
          fill="#f16e1d"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#f16e1d"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#f16e1d"
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
              <span className="self-center">
                <img src={Logo} width={'270px'}></img>
              </span>
          </Link>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul className='nav-list'>
              <li>
                <NavLink to="/" onClick={handleMenuTwo}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/sobrenos" onClick={handleMenuTwo}>Sobre nós</NavLink>
              </li>
              <li>
                <Dropdown
                  open={open}
                  trigger={<button onClick={handleOpen}>Projetos</button>}
                  menu={[
                    <NavLink to="/projetos-disponiveis" onClick={handleMenuTwo}>Plantas disponíveis</NavLink>,
                    <NavLink to="/projeto-personalizado" onClick={handleMenuTwo}>Projeto personalizado</NavLink>,
                  ]}
                />
              </li>
              <li>
                <NavLink to="/obras-em-andamento" onClick={handleMenuTwo}>Obras em andamento</NavLink>
              </li> 
              <li>
                <NavLink to="/contato" onClick={handleMenuTwo}>Contato</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
