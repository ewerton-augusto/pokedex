import React, { useState } from "react";
import { toast } from "react-toastify";

import { getPokedex, setPokedex } from "../../services/pokedex";

import { Card } from "../../styles/components/CardPokemon";
import ImgLoadingSprites from "../../components/ImgLoadingSprites";

import { ReactComponent as PokeballColorIcon } from "../../assets/svg/pokeball-color.svg";
import pokedexIcon from "../../assets/svg/pokedex.svg";

const CardPokemon = ({ pokemon }) => {
  const [pokedexList, setPokedexList] = useState(getPokedex());

  const handleCapturePokemon = (pokemon) => {
    const result = setPokedex(pokemon.id);
    if (result) {
      toast.success(
        "O pokémon " + pokemon.name.toUpperCase() + " foi capturado!"
      );
      setPokedexList(getPokedex());
    } else {
      toast.warning("Falha ao capturar o pokémon " + pokemon.name + ".");
    }
  };

  const checkPokemonInPokedex = (id) => {
    const pokedex = pokedexList;
    const found = pokedex.find((pokemon) => pokemon.id === id);
    return found !== undefined ? true : false;
  };

  return (
    <>
      <Card>
        {pokemon.sprites === undefined ? (
          <ImgLoadingSprites />
        ) : (
          <>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="card__img"
            />
          </>
        )}
        <div className="card__content">
          <button
            className="card__button"
            type="button"
            title="Capturar"
            disabled={checkPokemonInPokedex(pokemon.id) ? true : false}
            onClick={() => handleCapturePokemon(pokemon)}
          >
            <PokeballColorIcon className="card__icon" />
          </button>
          <p className="card__number">Nº {pokemon.id}</p>
          <p className="card__name">{pokemon.name}</p>
          <div className="card__type">
            {pokemon.types.map((item) => (
              <span
                key={item.slot}
                className={`pokemon__type type__color-${item.type.name}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
          {checkPokemonInPokedex(pokemon.id) ? (
            <img
              src={pokedexIcon}
              alt="Pokedex"
              title="Já adicionado a Pokedex"
              className="card__icon"
            />
          ) : (
            <></>
          )}
        </div>
      </Card>
    </>
  );
};

export default CardPokemon;
