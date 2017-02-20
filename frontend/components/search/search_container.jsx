import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state) => ({
  searchResult: state.search.projects
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
