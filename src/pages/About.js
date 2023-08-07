import React from 'react';

import Image from '../assets/img/house-banner.png';

const About = () => {
  return (
    <section className='h-full mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-orangers'>Sobre</span> nós
          </h1>
          <div className='max-w-[580px] mb-8'>
            <p>A Roberto Silveira é comprometida em oferecer soluções habitacionais de alta qualidade, superando expectativas e combinando inovação, excelência e conforto em cada projeto. Valorizamos a qualidade, utilizando materiais de primeira linha e uma equipe capacitada para criar residências duradouras e funcionais que atendam às necessidades dos clientes.</p>
            <p className='py-8'>Destacamo-nos pela rapidez e pontualidade, entregando projetos dentro do prazo sem comprometer a qualidade e os detalhes que tornam cada casa única. Acreditamos que todos merecem um lar digno e confortável, adaptando-nos às diferentes realidades e necessidades dos clientes por meio de opções acessíveis e flexíveis.</p>
            <p>Seja você um jovem casal em busca do primeiro lar, uma família que deseja mais espaço ou um investidor em busca de oportunidades, a Roberto Silveira está pronta para tornar seus sonhos realidade.</p>
            <p className='py-8'>Venha conhecer nossa metodologia inovadora e descubra como podemos transformar sua visão em um lar excepcional para você e sua família.</p>
          </div>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
    </section>
  );
};

export default About;
