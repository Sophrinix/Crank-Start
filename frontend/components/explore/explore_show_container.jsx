import { connect } from 'react-redux';
import ExploreShow from './explore_show';
import { categorySearch } from '../../actions/search_actions';


const mapStateToProps = ( state ) => ({
  projects: state.search.category_projects
});

const mapDispatchToProps = (dispatch) => ({
  categorySearch: (category) => dispatch(categorySearch(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExploreShow)
