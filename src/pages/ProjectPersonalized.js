import React from 'react';

import Contact from '../components/Contact';

const ProjectPersonalized = () => {
  return (
    <div>
        <div className=''>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h4 className='text-4xl lg:text-[48px] font-semibold leading-none mb-6'>
            <span className='text-orangers'>Bem-vindo</span> ao nosso criador de projetos personalizados! 
          </h4>
          <p className='max-w-[70%] mb-8'>
          Aqui, você tem a liberdade de escolher cada detalhe do seu projeto, tornando-o verdadeiramente único e especial.
          Seja um design elegante, uma funcionalidade específica ou cores que combinem com sua personalidade
          , nós garantimos que cada escolha seja cuidadosamente incorporada. 
          </p>
          <Contact />
        </div>
        </div>
    </div>
  );
};

export default ProjectPersonalized;
