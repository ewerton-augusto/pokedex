const LOCALSTORAGE = "@pokedex";

export const getPokedex = () => {
  const localPokedex = localStorage.getItem(LOCALSTORAGE);
  return localPokedex ? JSON.parse(localPokedex) : [];
};

export const setPokedex = (id) => {
  try {
    const newPokemonPokedex = { id: id };
    const localPokedex = localStorage.getItem(LOCALSTORAGE);
    let pokedex = [];
    if (!localPokedex) {
      pokedex = [newPokemonPokedex];
    } else {
      const oldPokedex = JSON.parse(localPokedex);
      pokedex = [...oldPokedex, newPokemonPokedex];
    }
    localStorage.setItem("@pokedex", JSON.stringify(pokedex));

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
