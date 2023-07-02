import React from 'react';

import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div>
        <div className=''>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h4 className='text-4xl lg:text-[48px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Entra</span> em contato com a gente
          </h4>
          <p className='max-w-[70%] mb-8'>
            Estamos aqui para ajudar! Se você tiver alguma dúvida ou precisar de mais informações sobre nossos serviços ou imóveis disponíveis, por favor, entre em contato. Estamos prontos para atendê-lo e responder às suas perguntas. Aguardamos ansiosamente o seu contato!
            <span className='text-violet-700'> Equipe de Vendas da Roberto Silveira </span>
          </p>
          <Contact />
        </div>
        </div>
    </div>
  );
};

export default ContactPage;
