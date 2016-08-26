import React from 'react';
import merge from 'lodash/merge';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = this.errors.bind(this);
  }

  update(props) {
    let movesArr = [this.state.moves1, this.state.moves2, this.state.moves3, this.state.moves4];
    let newState = merge(this.state, props, {moves: movesArr});
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const pokemon = this.state;
    delete pokemon.moves1;
    delete pokemon.moves2;
    delete pokemon.moves3;
    delete pokemon.moves4;

    this.props.createPokemon(pokemon);
    this.state = {};
  }

  errors() {
    return this.props.error.statusText || "";
  }

  render() {

    const types = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ];

    const typeOptions = types.map(type => (
      <option value={type}> {type} </option>
    ));

    return (
      <section className="pokemon-detail">
        <img src="/assets/pokemon-logo.png"/>
        <ul>
          {this.errors()}
        </ul>
        <form className="pokemon-form" onSubmit={this.handleSubmit}>
            Name: <input onChange={(e) => this.update({name: e.currentTarget.value})}/>
            Attack: <input onChange={(e) => this.update({attack: e.currentTarget.value})}/>
            Defense: <input onChange={(e) => this.update({defense: e.currentTarget.value})}/>
            Picture: <input onChange={(e) => this.update({image_url: e.currentTarget.value})}/>

            Move 1: <input  onChange={(e) => this.update({moves1: e.currentTarget.value})}/>
            Move 2: <input  onChange={(e) => this.update({moves2: e.currentTarget.value})}/>
            Move 3: <input  onChange={(e) => this.update({moves3: e.currentTarget.value})}/>
            Move 4: <input  onChange={(e) => this.update({moves4: e.currentTarget.value})}/>

            Type:
            <select onChange={(e) => this.update({poke_type: e.currentTarget.value})}>
              {typeOptions}
            </select>
          <button>Create Pokemon</button>
        </form>
      </section>
    );
  }
}

export default PokemonForm;
