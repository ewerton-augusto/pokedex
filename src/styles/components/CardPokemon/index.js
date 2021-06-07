import styled from "styled-components";
import { dark } from "../../../UI/colors";

export const CardList = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1rem;
`;

export const CardLink = styled.div`
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.9;
    transform: scale(1.02);
  }
`;

export const Card = styled.div`
  position: relative;
  min-height: 180px;

  @media (max-width: 710px) {
    width: 100%;
    max-width: none;
  }

  .card__img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 2;
    max-width: 90px;
    max-height: 90px;
  }

  .card__img__details {
    width: 150px;
    height: 150px;
  }

  .card__content {
    position: absolute;
    bottom: 0;
    width: -webkit-fill-available;
    height: 55%;
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

  .card__content .card__button {
    z-index: 4;
    align-self: flex-end;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 5px;

    &:hover,
    &:focus {
      opacity: 0.8;
      transform: scale(1.02);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
      &:hover {
        transform: none;
      }
    }
  }

  .card__content .card__number {
    font-size: 0.8rem;
    font-weight: 800;
    margin: 0.3rem 0;
    color: #4f4f4f;
  }

  .card__content .card__name {
    font-size: 1.125rem;
    text-transform: capitalize;
    font-weight: 900;
    color: #dc0a2d;
  }

  .card__type {
    margin: 0.3rem 0;
    padding: 6px;
  }

  .pokemon__type {
    margin: 0 6px;
    padding: 4px;
    border: 1px solid ${dark};
    border-radius: 5px;

    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 900;
    color: ${dark};
  }

  .card__icon {
    width: 15px;
    height: 15px;
  }
`;

export const Loading = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 2;
  max-width: 150px;
  max-height: 150px;
`;
