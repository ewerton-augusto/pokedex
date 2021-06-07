import styled from "styled-components";
import { dark } from "../../../UI/colors";

export const CardDetailsStyled = styled.div`
  width: 100%;
  max-width: 350px;
  margin-left: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 710px) {
    margin-top: 4rem;
    max-width: none;
    margin-left: 0;
  }
`;

export const Card = styled.div`
  position: relative;

  @media (max-width: 710px) {
    width: 100%;
    max-width: none;
  }

  .card__img {
    position: absolute;
    top: -65px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    z-index: 2;
    max-width: 150px;
    max-height: 150px;
  }

  .card__content {
    bottom: 0;
    background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
    box-shadow: 0 1px 2px 0 ${dark};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border-radius: 20px;
    color: ${dark};
  }

  .card__content .content__title {
    margin: 0.5rem 0;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }

  .card__content .card__number {
    font-size: 1rem;
    font-weight: 800;
    margin-top: 4rem;
    margin-bottom: 0.5rem;
    color: #4f4f4f;
  }

  .card__content .card__name {
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 900;
    color: #dc0a2d;
  }

  .card__content .card__type {
    margin: 0.3rem 0;
    padding: 6px;
  }

  .card__content .content__basic {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .card__content .content__height,
  .card__content .content__weight {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .card__content .content__stats {
    display: flex;
  }

  .card__content .content__stats .stats__items {
    background-color: #fafafa;
    border-radius: 15px;
    margin: 0.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .card__content .content__stats .stats__items .stats__title,
  .card__content .content__stats .stats__items .stats__text {
    padding: .5rem;
  }

  .card__content .content__stats .stats__items .stats__title {
    color: #fff;
    border-radius: 15px;
  }

  .stats__title-atk {
    background-color: #fe8a44;
  }

  .stats__title-def {
    background-color: #ffdc43;
  }

  .stats__title-hp {
    background-color: #df2140;
  }

  .pokemon__type {
    margin: 0 6px;
    padding: 6px;
    border: 1px solid ${dark};
    border-radius: 5px;

    text-transform: uppercase;
    font-size: 0.6rem;
    font-weight: 900;
    color: ${dark};
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 2;
  max-width: 150px;
  max-height: 150px;
`;
