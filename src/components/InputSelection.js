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
  }
`;

const InputSelection = () => {
  return (
    <>
      <ContainerSelect>
        <select>
          <option></option>

          <option></option>

          <option></option>

          <option></option>

          <option></option>
        </select>
      </ContainerSelect>
    </>
  );
};

export default InputSelection;
