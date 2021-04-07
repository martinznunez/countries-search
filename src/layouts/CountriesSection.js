import React from "react";

import Header from "../components/Header";
import Input from "../components/Input";
import InputSelection from "../components/InputSelection";
import ListCountries from "../components/ListCountries";

const CountriesSection = ({
  toggleTheme,
  theme,
  setRegionSearch,
  regionSearch,
}) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Input />
      <InputSelection setRegionSearch={setRegionSearch} />
      <ListCountries theme={theme} regionSearch={regionSearch} />
    </>
  );
};

export default CountriesSection;
