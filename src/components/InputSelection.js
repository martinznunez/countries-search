import React from "react";
import styled from "styled-components";

const ContainerSelect = styled.div`
  width: 100%;
  margin-top: 50px;
  select {
    padding: 24px;
    border: 10px;
    border-radius: 5px;
    margin-left: 40px;
    width: 300px;
  }
`;

const InputSelection = () => {
  return (
    <>
      <ContainerSelect>
        <select>
          <option>Fútbol</option>

          <option>Críquet</option>

          <option>Básquetbol</option>

          <option>Hockey</option>

          <option>Tenis</option>
        </select>
      </ContainerSelect>
    </>
  );
};

export default InputSelection;
