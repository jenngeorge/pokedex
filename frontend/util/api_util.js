export const requestAllPokemon = (success) => {
  $.ajax({
    url: 'api/pokemon',
    method: 'GET',
    success
  });
};



export const requestOnePokemon = (pokemonId, success) => {
  $.ajax({
    url: `api/pokemon/${pokemonId}`,
    method: 'GET',
    success
  });
};

export const createPokemon = (data, success, error) => {
  $.ajax({
    url:'api/pokemon',
    method: "POST",
    data: {pokemon: data},
    success,
    error
  });
};
