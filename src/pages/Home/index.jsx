import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { BackgroundHome, Container, Section, Title } from "../../styles/pages";
import NavMenu from "../../components/NavMenu";

import api from "../../services/api";
import CardPokemon from "../../components/CardPokemon";
import styled from "styled-components";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    const response = await api.get("pokemon/" + search);
    console.log(response);

    if (response.status === 200 && response.data.species) {
      setPokemons([response.data]);
    } else {
      toast.error("Falha ao listar Pokémon.");
      console.log(response);
    }
  };

  useEffect(async () => {
    const response = await api.get("pokemon");    
    if (response.status === 200 && response.data) {

      setPrevious(response.data.previous);
      setNext(response.data.next);
      
      const listaPokemons = [];
      response.data.results.forEach(async (pokemon) => {
        const resp = await api.get(pokemon.url);
        if (resp.status === 200 && resp.data) {          
          listaPokemons.push(resp.data);
        }
      });
      setPokemons(listaPokemons);
    } else {
      toast.error("Falha ao listar Pokémons.");
      console.log(response);
    }
  }, []);

  const CardList = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 2rem 1rem;
  `;

  return (
    <>
      <BackgroundHome>
        <Container>
          <NavMenu />
          <Section>
            <Title>Home</Title>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Pesquisar Pokémon ID ou Nome"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                required
              />
              <button type="submit">Pesquisar</button>
            </form>

            <CardList>
              {pokemons.map((pokemon, index) => (
                <CardPokemon pokemon={pokemon} key={index} />
              ))}
            </CardList>
          </Section>
        </Container>
      </BackgroundHome>
    </>
  );
};

export default Home;
