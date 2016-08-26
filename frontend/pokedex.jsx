import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/store';

import PokemonIndexContainer from './components/pokemon/pokemon_index_container';
import PokemonDetailContainer from './components/pokemon/pokemon_detail_container';
import ToyDetailContainer from './components/pokemon/toy_detail_container';
import PokemonFormContainer from './components/pokemon/pokemon_form_container';


import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// import * as API from './util/api_util';
// window.API = API;
//
import Actions from './actions/pokemon_actions';
// window.PA = PokemonActions;





const Root = ({store}) => {
  const fetchAllPokemon = () => store.dispatch(Actions.requestAllPokemon());
  const fetchOnePokemon = (nextState) => (
    store.dispatch(Actions.requestOnePokemon(nextState.params.id))
  );

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={PokemonIndexContainer} onEnter={fetchAllPokemon}>
          <IndexRoute component={PokemonFormContainer} />
          <Route path="/pokemon/:id"
            component={PokemonDetailContainer}
            onEnter={fetchOnePokemon}>
            <Route path="toys/:toyId" component={ToyDetailContainer}/>
          </Route>
        </Route>
      </Router>
    </Provider>
  );


};

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
