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
      <ImSpinner2 className='mx-auto animate-spin text-orangers text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }
  return (
    <div>
      <Search />
      <HouseList />
    </div>
  );
};

export default HousesPage;
