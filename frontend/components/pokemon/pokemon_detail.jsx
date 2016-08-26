import React from 'react';
import {withRouter} from 'react-router';

const PokemonDetail = ({pokemon, children, router}) => {
  const {name, image_url, poke_type, attack, defense, moves, toys} = pokemon;
  const _handleClick = (idx => router.push(`pokemon/${pokemon.id}/toys/${idx}`))

  const toyPics = toys.map((toy, idx) => (
    <li onClick={_handleClick.bind(null, idx)}>
      <img src={toy.image_url}/>
    </li>
  ));

  return (
    <section className="pokemon-detail">
    <ul>
      <img src={image_url} alt=""/>
        <li><h2>{name}</h2></li>
        <li>Type: {poke_type}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Moves: &#34;{moves}&#34;</li>
      <section className="toys">
          <h3>Toys</h3>
        <ul className="toy-list">
          {toyPics}
        </ul>
      </section>
    </ul>
    <div>
      <h2> Current Toy </h2>
      { children }
    </div>
  </section>
  );
};

export default withRouter(PokemonDetail);
