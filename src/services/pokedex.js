const LOCALSTORAGE = "@pokedex";

export const getPokedex = () => {
  const localPokedex = localStorage.getItem(LOCALSTORAGE);
  return localPokedex ? JSON.parse(localPokedex) : [];
};

export const setPokedex = (idPokemon) => {
  try {
    if (!idPokemon) {
      return false;
    }

    const newPokemonPokedex = { id: idPokemon };
    const localPokedex = localStorage.getItem(LOCALSTORAGE);
    let pokedex = [];
    if (!localPokedex) {
      pokedex = [newPokemonPokedex];
    } else {
      const oldPokedex = JSON.parse(localPokedex);
      pokedex = [...oldPokedex, newPokemonPokedex];
    }
    localStorage.setItem(LOCALSTORAGE, JSON.stringify(pokedex));

    return true;
  } catch (error) {
    //console.log(error);
    return false;
  }
};

export const deletePokedex = (idPokemon) => {
  try {
    if (!idPokemon) {
      return false;
    }
    const localPokedex = JSON.parse(localStorage.getItem(LOCALSTORAGE));

    localPokedex.forEach((pokemon, index) => {
      if (pokemon.id === idPokemon) {
        localPokedex.splice(index, 1);
      }
    });
    localStorage.setItem(LOCALSTORAGE, JSON.stringify(localPokedex));

    return localPokedex;
    
  } catch (error) {
    //console.log(error);
    return false;
  }
};
