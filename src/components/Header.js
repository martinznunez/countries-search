import React from "react";
import styled from "styled-components";

import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  align-items: center;
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.text};

  .container-darkModel {
    display: flex;
    p {
      margin-left: 20px;
      font-size: 1rem;
    }
  }

  h1 {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 1520px) {
    h1 {
      font-size: 1.8rem;
    }
    .container-darkModel {
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

const Header = ({ toggleTheme }) => {
  return (
    <>
      <ContainerHeader>
        <h1>Wheare in the world? </h1>
        <div className="container-darkModel">
          <FontAwesomeIcon
            data-testid="icon"
            onClick={toggleTheme}
            icon={faMoon}
            style={{ color: "hsl(0, 0%, 70%)", cursor: "pointer" }}
          />
          <p> Dark Mode</p>
        </div>
      </ContainerHeader>
    </>
  );
};

export default Header;
