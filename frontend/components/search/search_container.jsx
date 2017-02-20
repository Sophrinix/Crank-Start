import { connect } from 'react-redux';
import Search from './search';
import { hashHistory } from 'react-router';
import { searchProject, clearSearchResult } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  searchProjects: (query) => dispatch(searchProject(query)),
  clearSearchResult: () => dispatch(clearSearchResult())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
