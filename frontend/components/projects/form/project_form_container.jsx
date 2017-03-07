import { connect } from 'react-redux';
import { createProject } from '../../../actions/project_actions';
import ProjectForm from './project_form';
import { fetchCategories } from '../../../actions/category_actions';
import { selectCategories } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  categories: selectCategories(state),
  session: state.session,
  errors: state.projectDetail.errors
});

const mapDispatchToProps  = (dispatch) => ({
  createProject : project => dispatch(createProject(project)),
  fetchCategories : () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
