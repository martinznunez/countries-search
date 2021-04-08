import React from "react";
import styled from "styled-components";

const ContainerMessage = styled.div`
  width: 80%;

  margin: auto;
  background: ${({ theme }) => theme.messageError};

  p {
    color: ${({ theme }) => theme.color};
    text-transform: uppercase;
    padding: 10px;
    font-size: 0.9rem;
    margin: 10px;
    text-align: center;
  }
  @media screen and (min-width: 1220px) {
    width: 30%;
  }
`;

const ErrorMessage = ({ message, messageError }) => {
  return (
    <>
      {messageError ? (
        <ContainerMessage>
          <p> {message}</p>
        </ContainerMessage>
      ) : null}
    </>
  );
};

export default ErrorMessage;
