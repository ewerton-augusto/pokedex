import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Card, Loading } from "../../styles/components/CardPokemon";

import Lottie from "react-lottie";
import loading from "../../assets/animation/pokemon-loading.json";

const ImgLoadingSprites = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
  };

  return (
    <>
      <Loading>
        <Lottie options={defaultOptions} />
      </Loading>
    </>
  );
};

const CardPokemon = ({ pokemon }) => {
  /*
  const [pokemon, setPokemon] = useState([]);

  useEffect(async () => {
    const response = await api.get(props.url);
    if (response.status === 200 && response.data) {
      setPokemon(response.data);
    }
  }, []);
  */

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
          <p className="card__number">Nº {pokemon.id}</p>
          <p className="card__name">{pokemon.name}</p>
        </div>
      </Card>
    </>
  );
};

export default CardPokemon;
