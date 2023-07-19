import React, { createContext, useState, useEffect } from "react";

// import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [allRoomsNumber, setallRoomsNumber] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [rooms, setRooms] = useState("Rooms number (any)");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    const allRoomsNumber = houses.map((house) => {
      return house.bedrooms;
    });
    // remove duplicates
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    const uniqueRoomsNumber = [
      "Rooms number (any)",
      ...new Set(allRoomsNumber),
    ];
    // set countries state
    setCountries(uniqueCountries);
    setallRoomsNumber(uniqueRoomsNumber);
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };

    const selectedRooms =
      rooms !== "Rooms number (any)" ? parseInt(rooms.split(" ")[0]) : null;

    const newHouses = housesData.filter((house) => {
      const houseRooms = parseInt(house.bedrooms);

      // all values are selected
      if (
        house.country === country &&
        house.type === property &&
        house.bedrooms == selectedRooms
      ) {
        return house;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(rooms)) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(rooms)) {
        return house.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(rooms)) {
        return house.type === property;
      }

      // rooms is not default
      if (!isDefault(rooms) && isDefault(country) && isDefault(property)) {
        return house.bedrooms == selectedRooms;
      }

      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(rooms)) {
        return house.country === country && house.type === property;
      }
      // country and rooms is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(rooms)) {
        return house.country === country && house.bedrooms == selectedRooms;
      }
      // property and rooms is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(rooms)) {
        return house.type === property && house.bedrooms == selectedRooms;
      }
    });
    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        allRoomsNumber,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        rooms,
        setRooms,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
