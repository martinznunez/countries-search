import React from "react";
import styled from "styled-components";

const ContainerSelect = styled.div`
  width: 100%;
  margin-top: 50px;
  select {
    padding: 15px;
    border: 10px;
    border-radius: 5px;
    margin-left: 40px;
    width: 270px;
    font-size: 1rem;
  }
`;

const InputSelection = ({ setRegionSearch }) => {
  const handleSelect = (e) => {
    setRegionSearch(e.target.value);
  };

  return (
    <>
      <ContainerSelect>
        <select onChange={(e) => handleSelect(e)}>
          <option value="">---Select Region---</option>
          <option>Africa</option>

          <option>Americas</option>

          <option>Asia</option>

          <option>Europe</option>

          <option>Oceania</option>
        </select>
      </ContainerSelect>
    </>
  );
};

export default InputSelection;
