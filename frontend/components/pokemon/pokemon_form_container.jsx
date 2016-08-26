import {connect} from 'react-redux';
import PokemonForm from './pokemon_form';
import Actions from '../../actions/pokemon_actions';

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokemon) => dispatch(Actions.createPokemon(pokemon))
});

const mapStateToProps = ({error}) => ({error});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonForm);
