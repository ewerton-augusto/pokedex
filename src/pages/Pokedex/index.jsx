import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

import NavMenu from "../../components/NavMenu";
import { getPokedex, deletePokedex } from "../../services/pokedex";

import {
  BackgroundPokedex,
  Container,
  Section,
  Title,
} from "../../styles/pages";
import { DivPokedex } from "../../styles/pages/Pokedex";
import { CardList } from "../../styles/components/CardPokemon";
import CardPokedex from "../../components/CardPokedex";
import CardDetails from "../../components/CardDetails";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState(getPokedex());
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const getPokemons = () => {
    setPokemons([]);
    if (pokedex.length > 0) {
      pokedex.forEach(async (pokemon) => {
        const response = await api.get("pokemon/" + pokemon.id);
        const dadosPokemon = await response.data;
        setPokemons((pokemons) => [...pokemons, dadosPokemon]);
      });    
    }
  };

  const FreePokemon = (id) => {
    const result = deletePokedex(id);
    if (result) {
      setPokedex(result);
      toast.success("O pokémon foi libertado!");
    } else {
      toast.warning("Falha ao libertar o pokémon.");
    }
  };

  const ShowDetails = (id) => {
    const found = pokemons.find((pokemon) => pokemon.id === id);
    setPokemonDetails(found);
  };

  useEffect(() => {
    getPokemons();
  }, [pokedex]);

  return (
    <>
      <BackgroundPokedex>
        <Container>
          <NavMenu />
          <Section>
            <Title>Minha Pokédex</Title>
            <DivPokedex>
              <CardList>
                {pokemons.map((pokemon, index) => (
                  <CardPokedex
                    pokemon={pokemon}
                    key={index}
                    FreePokemon={FreePokemon}
                    ShowDetails={ShowDetails}
                  />
                ))}
              </CardList>
              {
               pokedex.length > 0 ? (<CardDetails pokemon={pokemonDetails} />) : (<></>)
              }            
            </DivPokedex>
          </Section>
        </Container>
      </BackgroundPokedex>
    </>
  );
};

export default Pokedex;
