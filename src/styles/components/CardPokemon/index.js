import styled from "styled-components";
import { typesColors, dark } from "../../../UI/colors";

export const CardList = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 1rem;
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
    &:hover{
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

  .type__color-normal {
    background: ${typesColors.normal};
  }

  .type__color-fighting {
    background: ${typesColors.fighting};
  }

  .type__color-flying {
    background: ${typesColors.flying};
  }

  .type__color-poison {
    background: ${typesColors.poison};
  }

  .type__color-ground {
    background: ${typesColors.normal};
  }

  .type__color-rock {
    background: ${typesColors.rock};
  }

  .type__color-bug {
    background: ${typesColors.bug};
  }

  .type__color-ghost {
    background: ${typesColors.ghost};
  }

  .type__color-steel {
    background: ${typesColors.steel};
  }

  .type__color-fire {
    background: ${typesColors.fire};
  }

  .type__color-water {
    background: ${typesColors.water};
  }

  .type__color-grass {
    background: ${typesColors.grass};
  }
  .type__color-electric {
    background: ${typesColors.electric};
  }

  .type__color-psychic {
    background: ${typesColors.psychic};
  }

  .type__color-ice {
    background: ${typesColors.ice};
  }

  .type__color-dragon {
    background: ${typesColors.dragon};
  }

  .type__color-dark {
    background: ${typesColors.dark};
  }

  .type__color-fairy {
    background: ${typesColors.fairy};
  }

  .type__color-unknown {
    background: ${typesColors.unknown};
  }

  .card__icon {
    width: 15px;
    height: 15px;
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
