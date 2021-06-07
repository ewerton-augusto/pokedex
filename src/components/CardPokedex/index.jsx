import React from "react";

import { Card, CardLink } from "../../styles/components/CardPokemon";
import ImgLoadingSprites from "../../components/ImgLoadingSprites";

import { ReactComponent as OpenPokeballColorIcon } from "../../assets/svg/open-pokeball.svg";
import { ReactComponent as DetailsIcon } from "../../assets/svg/details.svg";

const CardPokedex = ({ pokemon, FreePokemon, ShowDetails }) => {
  const handleFreePokemon = (id) => {
    FreePokemon(id);
  };

  const handleShowDetails = (id) => {
    ShowDetails(id);
  }

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
              title="Libertar"
              onClick={() => handleFreePokemon(pokemon.id)}
            >
              <OpenPokeballColorIcon className="card__icon" />
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
            <CardLink onClick={() => handleShowDetails(pokemon.id)}> <DetailsIcon className="card__icon" /> </CardLink>
          </div>
        </Card>
     
    </>
  );
};

export default CardPokedex;
