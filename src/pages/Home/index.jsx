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

  const [previousPage, setPreviousPage] = useState("");
  const [nextPage, setNextPage] = useState("");

  const getPokemons = (response) => {
    if (response.status === 200 && response.data) {

      setPreviousPage(response.data.previous);
      setNextPage(response.data.next);
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
  };

  useEffect(() => {
    if (search === "") {
      api.get("pokemon?offset=0&limit=10").then((response) => {
        getPokemons(response);
      });
    }
  }, [search]);

  const handleSearch = async (event) => {
    event.preventDefault();
    await api
      .get("pokemon/" + search.toLowerCase())
      .then((response) => {
        if (response.status === 200 && response.data) {

          setPreviousPage(null);
          setNextPage(null);
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

  const handlePreviousPage = async () => {
    if (previousPage !== null) {
      await api.get(previousPage).then((response) => getPokemons(response));
    }
  };

  const handleNextPage = async () => {
    if (nextPage !== null) {
      await api.get(nextPage).then((response) => getPokemons(response));
    }
  };

  return (
    <>
      <BackgroundHome>
        <Container>
          <NavMenu />
          <Section>
            <Title>Mundo Pokémon</Title>
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
            {previousPage || nextPage ? (
              <Pagination>
                <Button
                  onClick={handlePreviousPage}
                  disabled={previousPage === null ? true : false}
                >
                  Anterior
                </Button>
                <Button
                  onClick={handleNextPage}
                  disabled={nextPage === null ? true : false}
                >
                  Próximo
                </Button>
              </Pagination>
            ) : (
              <></>
            )}
          </Section>
        </Container>
      </BackgroundHome>
    </>
  );
};

export default Home;
