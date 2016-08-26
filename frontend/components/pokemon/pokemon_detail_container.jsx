import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail.jsx';

const mapStateToProps = state => ({
  pokemon: state.currentPokemon
});


export default connect(
  mapStateToProps
)(PokemonDetail);
