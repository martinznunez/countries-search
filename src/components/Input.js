import React from "react";
import styled from "styled-components";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerInput = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    width: 75%;
    cursor: pointer;
  }
  input {
    padding: 15px;
    border: 10px;
    border-radius: 10px;
    width: 400px;
  }
`;

const Input = () => {
  return (
    <>
      <ContainerInput>
        <div className="icon">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "hsl(0, 0%, 50%)" }}
          />
        </div>
        <input type="text" placeholder="      Search for a countries...  " />
      </ContainerInput>
    </>
  );
};

export default Input;
