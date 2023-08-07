import React, { useState, useContext } from 'react';

// import icons
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
// import headless ui components
import { Menu } from '@headlessui/react';
// import context
import { HouseContext } from './HouseContext';
import { BiBath } from 'react-icons/bi';

const BathroomsDropdown = () => {
  const { bathrooms, setBathrooms , bathRoomsNumber } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <BiBath className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>   {bathrooms} {bathrooms > 1 &&  'banheiros'}  {bathrooms == 1 &&  'banheiro'}</div>
          <div className='text-[13px]'>Selecionar</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {bathRoomsNumber.map((bathroom, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setBathrooms(bathroom)}
              key={index}
              className='cursor-pointer hover:text-orangers transition'
            >
              {bathroom} {bathroom > 1 &&  'banheiros'}  {bathroom == 1 &&  'banheiro'}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default BathroomsDropdown;
