import React, { useContext } from "react";

// import components
import CountryDropdown from "./CountryDropdown";
import PropertyDropdown from "./PropertyDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";

// import context
import { HouseContext } from "./HouseContext";

// import icon
import { RiSearch2Line } from "react-icons/ri";
import RoomsDropdown from "./RoomsDropdown";
import BathroomsDropdown from "./BathroomsDropdown";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] z-0 py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      {/* <CountryDropdown /> */}
      <PropertyDropdown />
      {/* <PriceRangeDropdown /> */}
      <RoomsDropdown />
      <BathroomsDropdown/>
      <button
        onClick={() => {
          handleClick();
        }}
        className="bg-orangers hover:bg-orange-400 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
