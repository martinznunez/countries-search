import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 80px;
  height: 30px;
  margin-top: 30px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  opacity: 60%;
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxshadow};

  color: ${({ theme }) => theme.button};
`;

const Button = () => {
  return (
    <>
      <Link to="/">
        <ButtonStyle>
          <FontAwesomeIcon icon={faLongArrowAltLeft} size="1x" />
          Black
        </ButtonStyle>
      </Link>
    </>
  );
};

export default Button;
