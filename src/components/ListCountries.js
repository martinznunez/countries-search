import React from "react";

import Countries from "../components/Countries";

const ListCountries = ({ theme, regionSearch, nameCountry }) => {
  return (
    <>
      <Countries
        theme={theme}
        regionSearch={regionSearch}
        nameCountry={nameCountry}
      />
    </>
  );
};

export default ListCountries;
