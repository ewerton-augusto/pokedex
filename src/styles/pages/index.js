import styled from "styled-components";
import bgImgPokeball from "../../assets/img/background-pokeball.png";
import bgImgPokedex from "../../assets/img/background-pokedex.png";
import { dark } from "../../UI/colors";

export const BackgroundHome = styled.div`
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${bgImgPokeball});
`;

export const BackgroundPokedex = styled.div`
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${bgImgPokedex});
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin: 1rem 0;
  @media (max-width: 1030px){
    margin: 1rem;
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  text-transform: capitalize;
  font-size: 2rem;
  text-align: center;
`;

