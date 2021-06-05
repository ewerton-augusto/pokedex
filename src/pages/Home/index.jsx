import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import api from "../../services/api";

import NavMenu from "../../components/NavMenu";
import CardPokemon from "../../components/CardPokemon";
import { ReactComponent as PokeballSearchIcon } from "../../assets/svg/pokebola.svg";

import { BackgroundHome, Container, Section, Title } from "../../styles/pages";
import { Form, Input, Button, Pagination } from "../../styles/pages/Home";
import { CardList } from "../../styles/components/CardPokemon";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const [search, setSearch] = useState("");

  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    api.get("pokemon").then((response) => {
      if (search === "") {
        if (response.status === 200 && response.data) {
          setPrevious(response.data.previous);
          setNext(response.data.next);

          setPokemons([]);
          response.data.results.forEach(async (pokemon) => {
            const response = await api.get(pokemon.url);
            const dadosPokemon = await response.data;
            setPokemons((pokemons) => [...pokemons, dadosPokemon]);
          });
        } else {
          toast.error("Falha ao listar Pokémons.");
          console.log(response);
        }
      }
    });
  }, [search]);

  const handleSearch = async (event) => {
    event.preventDefault();

    await api
      .get("pokemon/" + search)
      .then((response) => {
        if (response.status === 200 && response.data) {
          console.log(response);
          setPokemons([response.data]);
        } else {
          toast.warning("Pokémon não encontrado.");
          console.log(response);
        }
      })
      .catch((error) => {
        toast.warning("Ocorreu um erro ao pesquisar Pokémon.");
        console.log(error);
      });
  };

  return (
    <>
      <BackgroundHome>
        <Container>
          <NavMenu />
          <Section>
            <Title>Home</Title>
            <Form onSubmit={handleSearch}>
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Digite o ID ou nome do Pokémon"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
                className="input__search"
                required
              />
              <Button type="submit">
                <PokeballSearchIcon className="button__icon" />
              </Button>
            </Form>
            <CardList>
              {pokemons.map((pokemon, index) => (
                <CardPokemon pokemon={pokemon} key={index} />
              ))}
            </CardList>
            <Pagination>
              <Button>Anterior</Button>
              <Button>Próximo</Button>
            </Pagination>
          </Section>
        </Container>
      </BackgroundHome>
    </>
  );
};

export default Home;
