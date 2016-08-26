import Actions from '../actions/pokemon_actions';
import * as API from '../util/api_util';
import {hashHistory} from 'react-router';

const pokemonMiddleware = ({dispatch}) => next => action => {
  switch(action.type){
    case Actions.REQUEST_ALL_POKEMON: {
      const success = (data) => {
        dispatch(Actions.receiveAllPokemon(data));
      };
      API.requestAllPokemon(success);
      break;
    }

    case Actions.REQUEST_ONE_POKEMON: {
      const success = (data) => {
        dispatch(Actions.receiveOnePokemon(data));
      };
      API.requestOnePokemon(action.id, success);
      break;
    }

    case Actions.CREATE_POKEMON: {
      const error = (e) => dispatch(Actions.pokemonError(e));
      const success = (data) => {
        hashHistory.push(`/pokemon/${data.id}`);
        dispatch(Actions.receiveNewPokemon(data));
      };
      API.createPokemon(action.data, success, error);
      break;
    }



    default:
      next(action);
  }
};

export default pokemonMiddleware;
