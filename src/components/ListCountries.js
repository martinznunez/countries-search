import React, { useEffect } from "react";

import Countries from "../components/Countries";

import { fetchCountries } from "../config/getAllCountries";

const ListCountries = () => {
  const getCountries = async () => {
    try {
      const response = await fetchCountries();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <>
      <div>
        <Countries />
      </div>
    </>
  );
};

export default ListCountries;
