import React, { useEffect, useState } from "react";
import { BackgroundHome, Container } from "../../styles/pages";
import NavMenu from "../../components/NavMenu";

import api from "../../services/api";
import CardPokemon from "../../components/CardPokemon";
import styled from "styled-components";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    api
      .get("pokemon")
      .then((response) => {
        if (response.status === 200 && response.data) {
          setPrevious(response.data.previous);
          setNext(response.data.next);

          setPokemons(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const CardList = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 2rem 1rem;
  `;

  return (
    <>
      <BackgroundHome>
        <Container>
          <NavMenu />
          <section>
            <h1>Home</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Pesquisar Pokémon ID ou Nome"
              required
            />
            <CardList>
              {pokemons.map((pokemon, index) => (
                <>
                  <CardPokemon url={pokemon.url} key={index} />
                </>
              ))}
            </CardList>

          </section>
        </Container>
      </BackgroundHome>
    </>
  );
};

export default Home;
