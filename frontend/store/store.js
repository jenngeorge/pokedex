import {createStore} from 'redux';
import pokemonReducer from '../reducers/pokemon_reducer';
import pokemonMiddleware from '../middleware/pokemon_middleware';
import {applyMiddleware} from 'redux';

const middlewares = applyMiddleware(pokemonMiddleware);

const configureStore = () => createStore(pokemonReducer, middlewares);

export default configureStore;
