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

const RoomsDropdown = () => {
  const { rooms, setRooms , allRoomsNumber } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{rooms}</div>
          <div className='text-[13px]'>Selecionar</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {allRoomsNumber.map((room, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setRooms(room)}
              key={index}
              className='cursor-pointer hover:text-orangers transition'
            >
              {room} {room > 1 &&  'Bedrooms'}  {room == 1 &&  'Bedroom'}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default RoomsDropdown;
