import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-orangers'>Construa</span> Sua Casa Dos Sonhos Conosco.
          </h1>
          <p className='max-w-[480px] mb-8'>
            Com a Roberto Silveira o sonho de ter um lugar para chamar de seu está muito perto de se realizar! Temos diversas plantas disponíveis para você escolher o lugar onde você irá criar as memórias mais felizes com sua família. Mas se você deseja ir além, criamos um projeto do zero com base nas suas necessidades ou avaliamos o projeto que você já tem, para fazer do seu sonho realidade.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4'>
            <button
              className='bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm w-full transition'
            >
              <NavLink to="/projetos-disponiveis">Ver plantas disponíveis</NavLink>
            </button>
            <button
              className='bg-white-100 hover:bg-orangers text-orangers hover:text-white border border-orangers rounded p-4 text-sm w-full transition'
            >
              <NavLink to="/projeto-personalizado">Quero um projeto personalizado</NavLink>
            </button>
          </div>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} className='rounded-lg' alt='' />
        </div>
      </div>
      {/* <Search /> */}
    </section>
  );
};

export default Banner;
