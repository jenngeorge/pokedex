const PokemonActions = {
  RECEIVE_ALL_POKEMON: "RECEIVE_ALL_POKEMON",
  REQUEST_ALL_POKEMON: "REQUEST_ALL_POKEMON",
  REQUEST_ONE_POKEMON: "REQUEST_ONE_POKEMON",
  RECEIVE_ONE_POKEMON: "RECEIVE_ONE_POKEMON",
  CREATE_POKEMON: "CREATE_POKEMON",
  RECEIVE_NEW_POKEMON: "RECEIVE_NEW_POKEMON",
  POKEMON_ERROR: "POKEMON_ERROR",

  receiveAllPokemon: (pokemon) => ({
    type: PokemonActions.RECEIVE_ALL_POKEMON,
    pokemon
  }),

  requestAllPokemon: () => ({
    type: PokemonActions.REQUEST_ALL_POKEMON
  }),

  requestOnePokemon: (id) => ({
    type: PokemonActions.REQUEST_ONE_POKEMON,
    id
  }),

  receiveOnePokemon: (pokemon) => ({
    type: PokemonActions.RECEIVE_ONE_POKEMON,
    pokemon
  }),

  createPokemon: (data) => ({
    type: PokemonActions.CREATE_POKEMON,
    data
  }),

  receiveNewPokemon: (pokemon) => ({
    type: PokemonActions.RECEIVE_NEW_POKEMON,
    pokemon
  }),

  pokemonError: (error) => ({
    type: PokemonActions.POKEMON_ERROR,
    error
  })

};

export default PokemonActions;
