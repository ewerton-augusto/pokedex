import React from "react";
import Lottie from "react-lottie";

import { Card, Loading } from "../../styles/components/CardPokemon";
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
        </div>
      </Card>
    </>
  );
};

export default CardPokemon;
