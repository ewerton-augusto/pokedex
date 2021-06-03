import styled from "styled-components";
import bgImgPokeball from "../../assets/img/background-pokeball.png";
import bgImgPokedex from "../../assets/img/background-pokedex.png";

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
  padding: 0.5rem;
`;
