import React, { createContext, useState, useEffect } from "react";

// import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

// provider
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  // const [country, setCountry] = useState("Location (any)");
  // const [countries, setCountries] = useState([]);
  const [allRoomsNumber, setallRoomsNumber] = useState([]);
  const [bathRoomsNumber, setbathRoomsNumber] = useState([]);

  const [property, setProperty] = useState("tipo de propriedade (qualquer)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [rooms, setRooms] = useState("número de quartos (qualquer)");
  const [bathrooms, setBathrooms] = useState("quantidade banheiros (qualquer)");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const allRoomsNumber = houses.map((house) => {
      return house.bedrooms;
    });
    const uniqueRoomsNumber = [
      "número de quartos (qualquer)",
      ...new Set(allRoomsNumber),
    ];
    setallRoomsNumber(uniqueRoomsNumber.sort());
  }, []);
  useEffect(() => {
    const bathRoomsNumber = houses.map((house) => {
      return house.bathrooms;
    });
    const uniqueBathRoomsNumber = [
      "quantidade banheiros (qualquer)",
      ...new Set(bathRoomsNumber),
    ];
    setbathRoomsNumber(uniqueBathRoomsNumber.sort());
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["tipo de propriedade (qualquer)", ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(" ").includes("(qualquer)");
    };

    const selectedRooms =
      rooms !== "número de quartos (qualquer)" ? parseInt(rooms.split(" ")[0]) : null;
      const selectedBathRooms =
      rooms !== "quantidade banheiros (qualquer)" ? parseInt(rooms.split(" ")[0]) : null;

    const newHouses = housesData.filter((house) => {
      // const houseRooms = parseInt(house.bedrooms);

      // all values are selected
      if (
        // house.country === country &&
        house.type === property &&
        house.bedrooms == selectedRooms &&
        house.bathrooms == selectedBathRooms
      ) {
        return house;
      }
      // all values are default
      if (isDefault(bathrooms) && isDefault(property) && isDefault(rooms)) {
        return house;
      }
      // bathrooms is not default
      if (!isDefault(bathrooms) && isDefault(property) && isDefault(rooms)) {
        return house.bathrooms === bathrooms;
      }
      // property is not default
      if (!isDefault(property) && isDefault(bathrooms) && isDefault(rooms)) {
        return house.type === property;
      }

      // rooms is not default
      if (!isDefault(rooms) && isDefault(bathrooms) && isDefault(property)) {
        return house.bedrooms == selectedRooms;
      }

      // bathrooms and property is not default
      if (!isDefault(bathrooms) && !isDefault(property) && isDefault(rooms)) {
        return house.bathrooms === bathrooms && house.type === property;
      }
      // bathrooms and rooms is not default
      if (!isDefault(bathrooms) && isDefault(property) && !isDefault(rooms)) {
        return house.bathrooms === bathrooms && house.bedrooms == selectedRooms;
      }
      // property and rooms is not default
      if (isDefault(bathrooms) && !isDefault(property) && !isDefault(rooms)) {
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
        bathrooms,
        setBathrooms,
        bathRoomsNumber,
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
