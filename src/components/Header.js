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
  background: ${(props) =>
    props.primary === "light" ? "hsl(0, 0%, 100%)" : "hsl(207, 26%, 17%)"};
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
`;

const Header = ({ toggleTheme, theme }) => {
  return (
    <>
      <ContainerHeader primary={theme}>
        <h1>Wheare in the world? </h1>
        <div className="container-darkModel">
          <FontAwesomeIcon
            onClick={toggleTheme}
            icon={faMoon}
            style={{ color: "hsl(0, 0%, 70%)" }}
          />
          <p> Dark Mode</p>
        </div>
      </ContainerHeader>
    </>
  );
};

export default Header;
