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
    width: auto;
    margin-top: 15px;
    margin-left: 70%;
  }
  input {
    padding: 15px;
    border: 10px;

    border-radius: 10px;

    width: 400px;
  }
`;

const Input = ({ setNameCountry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setNameCountry(inputValue);

      setInputValue("");
    }
  };

  return (
    <>
      <ContainerInput>
        <form onSubmit={handleClick}>
          <div className="icon">
            <FontAwesomeIcon
              icon={faSearch}
              style={{ color: "hsl(0, 0%, 50%)" }}
            />
          </div>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search for a countries...  "
            value={inputValue}
          />
        </form>
      </ContainerInput>
    </>
  );
};

export default Input;
