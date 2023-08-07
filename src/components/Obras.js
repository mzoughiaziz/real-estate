import React from 'react';

import Obra from '../assets/img/house-banner.png';
import Obra1 from '../assets/img/obras/obra01.png';
import Obra2 from '../assets/img/obras/obra02.png';
import Obra3 from '../assets/img/obras/obra03.png';
import { NavLink } from 'react-router-dom'

const Obras = () => {
  return (
    <section className='h-full max-h-[1840px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-end flex-1 px-4 lg:px-0'>
          <div className='mb-4 flex gap-x-2 text-sm'>
            <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
                Casa
            </div>
            <div className='bg-orangers rounded-full text-white px-3 inline-block'>
                Obra em andamento
            </div>
            </div>
            <h2 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                Casa da Gabi 
            </h2>
            <p className='max-w-[580px] mb-8'>
                Nossa jornada com a querida cliente Gabi começou com um sonho. Desde o primeiro encontro, buscamos entender suas necessidades, preferências e aspirações para criar um projeto único e personalizado.
                Após várias reuniões de brainstorming e discussões, desenvolvemos um plano inicial que capturava perfeitamente a visão de Gabi. Cada detalhe foi cuidadosamente considerado, desde a arquitetura até os acabamentos, garantindo que a casa refletisse seu estilo e personalidade.
            </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Obra3} className='rounded-lg' alt='' />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Obra1} className='rounded-lg' alt='' />
        </div>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-end flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[28px] font-semibold leading-none mb-6'>
            Entendendo o projeto
          </h1>
          <p className='max-w-[580px] mb-8'>
            Com o plano em mãos, nossa equipe de arquitetos e engenheiros trabalhou incansavelmente para transformar a ideia em realidade. Adotando uma abordagem colaborativa, envolvemos Gabi em todas as etapas do processo, garantindo que suas expectativas fossem sempre atendidas.
          </p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-end flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[28px] font-semibold leading-none mb-6'>
            Mãos a obra
          </h1>
          <p className='max-w-[580px] mb-8'>
            Nossa missão é tornar os sonhos de nossos clientes em realidade, e a construção da casa de Gabi é o exemplo perfeito disso. Com paixão, dedicação e profissionalismo, transformamos ideias em lares, e lares em refúgios para toda a vida.
          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Obra2} className='rounded-lg' alt='' />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Obra} className='rounded-lg' alt='' />
        </div>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-end flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-orangers'>Construa</span> Sua Casa Dos Sonhos Conosco.
          </h1>
          <p className='max-w-[580px] mb-8'>
            Com a Roberto Silveira o sonho de ter um lugar para chamar de seu está muito perto de se realizar! Temos diversas plantas disponíveis para você escolher o lugar onde você irá criar as memórias mais felizes com sua família. Mas se você deseja ir além, criamos um projeto do zero com base nas suas necessidades ou avaliamos o projeto que você já tem, para fazer do seu sonho realidade.
          </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-4'>
            <button
              className='bg-orangers hover:bg-orange-400 text-white rounded p-4 text-sm w-full transition'
            >
              <a href='https://api.whatsapp.com/send/?phone=+553499860-7766&text=Olá!' target='_blank'>
                Entre em contato agora
              </a>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Obras;