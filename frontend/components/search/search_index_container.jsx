import { connect } from 'react-redux';
import SearchIndex from './search_index';


const mapStateToProps = (state) => ({
  searchResult: state.search.projects
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
