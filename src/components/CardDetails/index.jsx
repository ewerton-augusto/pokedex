import React from "react";

import ImgLoadingSprites from "../../components/ImgLoadingSprites";
import { CardDetailsStyled, Card } from "../../styles/components/CardDetails";

const CardDetails = ({ pokemon }) => {
  return (
    <>
      {console.log(pokemon)}
      <CardDetailsStyled>
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
            <p className="card__number">{pokemon.id ? `#${pokemon.id}` : ""}</p>
            <p className="card__name">{pokemon.name}</p>
            <div className="card__type">
              {pokemon.types !== undefined ? (
                <>
                  <h2 className="content__title">Tipos</h2>
                  {pokemon.types.map((item) => (
                    <span
                      key={item.slot}
                      className={`pokemon__type type__color-${item.type.name}`}
                    >
                      {item.type.name}
                    </span>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
            {pokemon.height !== undefined && pokemon.weight !== undefined ? (
              <>
                <div className="content__basic">
                  <div className="content__height">
                    <span className="content__title">Tamanho</span>
                    <span>{pokemon.height}</span>
                  </div>
                  <div className="content__weight">
                    <span className="content__title">Peso</span>
                    <span>{pokemon.weight}kg</span>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
            {pokemon.stats !== undefined ? (
              <>
                <div>
                  <h2 className="content__title">Stats</h2>
                  <div className="content__stats">
                    <div className="stats__items">
                      <span className="stats__title stats__title-atk">ATK</span>
                      <span className="stats__text">{pokemon.stats[1].base_stat}</span>
                    </div>
                    <div className="stats__items">
                      <span className="stats__title stats__title-def">DEF</span>
                      <span className="stats__text">{pokemon.stats[2].base_stat}</span>
                    </div>
                    <div className="stats__items">
                      <span className="stats__title stats__title-hp">HP</span>
                      <span className="stats__text">{pokemon.stats[0].base_stat}</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </Card>
      </CardDetailsStyled>
    </>
  );
};

export default CardDetails;
