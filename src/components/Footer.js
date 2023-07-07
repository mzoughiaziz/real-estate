import React from 'react';

// import link
import { Link } from 'react-router-dom';
//import './footer.css';

const Footer = () => {
  return (
  <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to='/' className='flex items-center mb-4 sm:mb-0'>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Roberto Silveira</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <Link className='mr-4 hover:underline md:mr-6' to='/'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className='mr-4 hover:underline md:mr-6' to='/imoveis'>
                    Imóveis
                  </Link>
                </li>
                <li>
                  <Link className='mr-4 hover:underline md:mr-6' to='/sobrenos'>
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link className='hover:underline' to='/contato'>
                    Contato
                  </Link>
                </li>
            </ul>
        </div>
        <div className="md:flex md:items-center md:justify-between mt-0">
          <div className='my-4 text-gray-500 '>
            <p>E-mail: rsilveira@gmail.com</p>
            <p>Telefone: (34) 9999 8888</p>
            <p>Endereço: Rua Stelmar José da Silva Junior, Loteamento Cândida Borges</p>
          </div>
          <div className="flex flex-col items-stretch">
            <a href='' className='pt-2 flex flex-row'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <span className="block text-sm text-gray-500 dark:text-gray-400 px-2">@roberto.silveira</span>
            </a>

            <a href='' className='pt-2 flex flex-row'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="block text-sm text-gray-500 dark:text-gray-400 px-2">@roberto.silveira</span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400"> Todos Os Direitos Reservados 2023
        <p><a href="https://tanitsolutions.com/" className="hover:text-white"> © Tanit Solution™</a></p></span>
    </div>
  </footer>
  );
};

export default Footer;
