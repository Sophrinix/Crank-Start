import { connect } from 'react-redux';
import Search from './search';
import { searchProject, clearSearchResult } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  searchProjects: (queryString) => dispatch(searchProject(queryString)),
  clearSearchResult: () => dispatch(clearSearchResult())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
