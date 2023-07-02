import React from 'react';

// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
        <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-dark">Roberto Silveira</span>
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Home
          </Link>
          <Link className='hover:text-violet-900 transition' to='/sobrenos'>
            Sobre nós
          </Link>
          <Link className='hover:text-violet-900 transition' to='/imoveis'>
            Imóveis
          </Link>
          <Link className='hover:text-violet-900 transition' to='/contato'>
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
