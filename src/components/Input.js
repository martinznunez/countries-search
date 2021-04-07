import React, { useState } from "react";
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
    width: 20px;

    margin-left: 70%;

    cursor: pointer;
  }
  input {
    padding: 15px;
    border: 10px;

    border-radius: 10px;

    width: 400px;
  }
`;

const Input = ({ setNameCountry, nameCountry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setNameCountry(inputValue);

      setInputValue("");
    }
  };

  return (
    <>
      <ContainerInput>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Search for a countries...  "
          value={inputValue}
        />
        <div className="icon">
          <FontAwesomeIcon
            icon={faSearch}
            onClick={handleClick}
            style={{ color: "hsl(0, 0%, 50%)" }}
          />
        </div>
      </ContainerInput>
    </>
  );
};

export default Input;
