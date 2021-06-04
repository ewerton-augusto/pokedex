import styled from "styled-components";
import {dark} from "../../../UI/colors";

export const Card = styled.div`
  position: relative;
  min-height: 180px;
  max-width: 220px;

  .card__img {
    position: absolute;
    top: 8px;
    left: 30%;
    z-index: 2;
    max-width: 100px;
    max-height: 100px;
  }

  .card__content {
    position: absolute;
    bottom: 0;
    width: -webkit-fill-available;    
    height: 50%;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    box-shadow: 0 1px 2px 0 ${dark};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border-radius: 15px;
    color: #fff;
  }

  .card__content .card__number {
    font-size: 0.8rem;
    font-weight: 800;
    margin: 0.5rem 0;
    color: #4f4f4f;
  }

  .card__content .card__name {
    font-size: 1.125rem;
    text-transform: capitalize;
    font-weight: 900;
    color: #dc0a2d;
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 14px;
  left: 35%;
  z-index: 2;
  max-width: 80px;
  max-height: 80px;
`;
