import styled from "styled-components";
import { primary } from "../../../UI/colors";

export const Error = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorContent = styled.div`
  width: 100%;
  max-width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${primary};
  font-weight: 700;

  .error__title{
      margin: 1rem 0;
  }
`;
