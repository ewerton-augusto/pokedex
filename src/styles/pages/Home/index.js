import styled from "styled-components";
import { dark, primary } from "../../../UI/colors";

export const Form = styled.form`
  display: flex;
  align-items: center;

  .input__search{
    margin-right: 1rem;
  }
`;

export const Input = styled.input`
  padding: 0.8rem;
  margin: 1rem 0;
  width: 70%;
  border: 1px solid ${dark};
  border-radius: 15px;
  box-sizing: border-box;
  &:focus {
    outline: 0;
    box-shadow: 0 0 1px 1px ${primary};
  }
`;

export const Button = styled.button`
  margin: 1rem 0;
  color: #fff;
  background-color: ${primary};
  border-radius: 10px;
  border: 0;
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1;
  outline: 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
    transform: scale(1.02);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
    &:hover{
      transform: none;
    }
  }

  .button__icon {
    width: 25px;
    height: 25px;
    fill: #fff;
  }
  
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
