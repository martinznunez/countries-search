import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 100px;
  height: 300px;
  margin: auto;
  margin-top: 40px;
`;

const Countries = () => {
  return (
    <>
      <Card>
        <img src="" alt="" />
        <h5> Nombre del pais </h5>
        <p>population</p>
        <p>region</p>
        <p>capital</p>
      </Card>
    </>
  );
};

export default Countries;
