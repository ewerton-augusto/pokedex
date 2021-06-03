import React from "react";
import { BackgroundHome, Container } from "../../styles/pages";
import NavMenu from "../../components/NavMenu";

const Home = () => {
  return (
    <>
      <BackgroundHome>
        <Container>
          <NavMenu />
          <h1>Home</h1>
        </Container>
      </BackgroundHome>
    </>
  );
};

export default Home;
