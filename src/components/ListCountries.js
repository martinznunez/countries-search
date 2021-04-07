import React from "react";

import Countries from "../components/Countries";

const ListCountries = ({ theme, regionSearch }) => {
  return (
    <>
      <Countries theme={theme} regionSearch={regionSearch} />
    </>
  );
};

export default ListCountries;
