import React from "react";
import { BackgroundPokedex, Container } from "../../styles/pages";
import NavMenu from "../../components/NavMenu";

const Pokedex = () => {
  return (
    <>
      <BackgroundPokedex>
        <Container>
          <NavMenu />
          <h1>Minha Pokédex</h1>
        </Container>
      </BackgroundPokedex>
    </>
  );
};

export default Pokedex;
