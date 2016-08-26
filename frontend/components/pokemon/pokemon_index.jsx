import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { withRouter } from 'react-router';

const PokemonIndex = ({pokemon, router, children}) => {
  const allPokemon = pokemon.map((pkmn, i) => (
    <PokemonIndexItem key={pkmn.name + i} pokemon={pkmn} router={router}/>
  ));

  return (
    <div>
      {children}
      <ul>
        {allPokemon}
      </ul>
    </div>
  );

};

export default withRouter(PokemonIndex);
