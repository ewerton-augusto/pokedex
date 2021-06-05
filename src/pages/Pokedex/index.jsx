import React from "react";
import { BackgroundPokedex, Container, Section, Title } from "../../styles/pages";
import NavMenu from "../../components/NavMenu";

const Pokedex = () => {
  return (
    <>
      <BackgroundPokedex>
        <Container>
          <NavMenu />
          <Section>
            <Title>Minha Pokédex</Title>
          </Section>
        </Container>
      </BackgroundPokedex>
    </>
  );
};

export default Pokedex;
