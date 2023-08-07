import React, { useContext } from 'react';

// import context
import { HouseContext } from '../components/HouseContext';
// import icons
import { ImSpinner2 } from 'react-icons/im';
import HouseList from '../components/HouseList';
import Search from '../components/Search';

const HousesPage = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-orangers text-4xl mt-[200px]' style={{minHeight: '500px'}}/>
    );
  }

  if (houses.length < 1) {
    return (
      <>
      <Search />
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Desculpe, nada foi encontrado.
      </div>
      </>
      
    );
  }
  return (
    <div>
      <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-4 text-center'>
        <span className='text-orangers'>Plantas</span> Disponiveis
      </h1>
      <p className='text-center text-xl pb-4'>Escolha o projeto que tem a sua cara e se prepare para viver os melhores dias da sua vida em um lugar só seu</p>
      <div className='mt-4'>
        <Search />
        <HouseList />
      </div>
    </div>
  );
};

export default HousesPage;
