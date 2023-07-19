import React, { useState, useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  const [visibleHouses, setVisibleHouses] = useState(6); 
  const loadMoreHouses = () => {
    setVisibleHouses(visibleHouses + 6); 
  };

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-orangers text-4xl mt-[200px]' style={{minHeight: '1000px'}} />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Desculpe, nada foi encontrado.
      </div>
    );
  }

  return (
    <section className='mb-20 '>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.slice(0, visibleHouses).map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
        {visibleHouses < houses.length && (
          <div className='text-center mt-6'>
            <button
              className='bg-orangers hover:orange-300 text-white font-bold py-2 px-4 rounded'
              onClick={loadMoreHouses}
            >
              Mostrar mais
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HouseList;
