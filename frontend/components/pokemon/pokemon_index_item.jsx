import React from 'react';

const PokemonIndexItem = ({pokemon, router}) => {

  const {id, image_url, name} = pokemon;
  const _handleClick = (router, url, e) => {
    router.push(url);
  };

  return (
    <li onClick={_handleClick.bind(null, router, `/pokemon/${id}`)}>
      <img src={image_url}/> {name}
    </li>
  );
};

export default PokemonIndexItem;
