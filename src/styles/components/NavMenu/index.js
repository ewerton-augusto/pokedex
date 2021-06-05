import styled from "styled-components";
import { primary, dark } from "../../../UI/colors";

export const Nav = styled.nav`
  padding: 0 24px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 2px 1px #ccc;
  min-height: 72px;
  margin: 1rem 0;

  @media (max-width: 1030px){
    margin: 1rem;
  }

  .nav__menus {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .nav__menu {
    height: 95%;
    margin: 0 1rem;
  }

  .nav__menu-active {
    border-bottom: 3px solid ${primary};
  }

  .nav__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 6px;

    color: ${dark};
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    cursor: pointer;
    &:hover,
    &:focus {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }

  .nav__icon {
    margin-top: 6px;
    width: 35px;
    height: 35px;
  }
`;
