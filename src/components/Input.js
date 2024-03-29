import React, { useState } from "react";
import styled from "styled-components";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerInput = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 30px;
  text-align: center;

  .icon {
    position: absolute;
    width: auto;
    margin-top: 15px;
    margin-left: 90%;
  }
  input {
    padding: 15px;
    border: 10px;
    border-radius: 10px;
    width: 95%;
    font-size: 1rem;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
    .icon {
      margin-left: 60%;
    }
  }
  @media screen and (min-width: 1520px) {
    width: 50%;
    .icon {
      margin-left: 45%;
      margin-top: 22px;
    }
    input {
      padding: 20px;

      width: 90%;
    }
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
        <form data-testid="submit" onSubmit={handleClick}>
          <div className="icon">
            <FontAwesomeIcon
              data-testid="icon"
              icon={faSearch}
              style={{ color: "hsl(0, 0%, 50%)" }}
            />
          </div>
          <div>
            <input
              data-testid="input"
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Search for a countries...  "
              value={inputValue}
            />
          </div>
        </form>
      </ContainerInput>
    </>
  );
};

export default Input;
