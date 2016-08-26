import { connect } from 'react-redux';
import ToyDetail from './toy_detail';

const mapStateToProps = (state, ownProps) => ({
  toy: state.currentPokemon.toys[ownProps.params.toyId]
});

export default connect(
  mapStateToProps
)(ToyDetail);
