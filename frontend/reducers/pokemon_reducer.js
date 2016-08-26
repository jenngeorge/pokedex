import Actions from '../actions/pokemon_actions';


const defaultState = {
  pokemon: [],
  currentPokemon: {toys:[]},
  error: {}
};

const pokemonReducer = (state = defaultState, action) => {
  switch(action.type) {
    case Actions.RECEIVE_ALL_POKEMON:
      return {pokemon: action.pokemon, currentPokemon: state.currentPokemon, error: {}};

    case Actions.RECEIVE_ONE_POKEMON:
      return {pokemon: state.pokemon, currentPokemon: action.pokemon, error: {}};

    case Actions.RECEIVE_NEW_POKEMON:
      return {pokemon: state.pokemon.concat(action.pokemon),
        currentPokemon: state.currentPokemon, error: {}};

    case Actions.POKEMON_ERROR:
      return {pokemon: state.pokemon,
        currentPokemon: state.currentPokemon,
        error: action.error};


    default:
      return state;
  }
};

export default pokemonReducer;
