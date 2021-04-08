import React, { useState } from "react";

import Input from "../components/Input";
import InputSelection from "../components/InputSelection";

import Countries from "../components/Countries";

const CountriesSection = () => {
  const [regionSearch, setRegionSearch] = useState();

  const [nameCountry, setNameCountry] = useState();

  return (
    <>
      <Input setNameCountry={setNameCountry} />
      <InputSelection setRegionSearch={setRegionSearch} />
      <Countries regionSearch={regionSearch} nameCountry={nameCountry} />
    </>
  );
};

export default CountriesSection;
