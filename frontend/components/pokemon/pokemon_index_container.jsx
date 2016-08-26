import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index.jsx';
import Actions from '../../actions/pokemon_actions';

const mapStateToProps = state => (
  {pokemon: state.pokemon}
);


export default connect(
  mapStateToProps
)(PokemonIndex);
