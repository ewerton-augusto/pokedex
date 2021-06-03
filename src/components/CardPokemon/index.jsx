import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../services/api";

const Card = styled.div`
  background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
`;

const CardPokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [image, setImage] = useState("");
  
  useEffect(async () => {
    const response = await api.get(props.url);
    if(response){
      setPokemon(response.data);
      setImage(pokemon.sprites.front_default);
    }
    
  }, []);

  return (
    <>
      <Card>
        <img src={image} alt={pokemon.name} />
        <p>{pokemon.id}</p>
        <p>{pokemon.name}</p>
      </Card>
    </>
  );
};

export default CardPokemon;
