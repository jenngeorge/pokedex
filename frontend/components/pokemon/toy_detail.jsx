import React from 'react';

const ToyDetail = ({toy}) => {
  const {name, price, happiness, image_url} = toy;
  return (
    <section className="toy-detail">
    <ul>
      <img src={image_url} alt=""/>
        <li><h2>{name}</h2></li>
        <li>Price: {price}</li>
        <li>Happiness: {happiness}</li>
    </ul>
  </section>
  );
};

export default ToyDetail;
