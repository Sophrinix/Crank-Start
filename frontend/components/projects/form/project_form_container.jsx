import { connect } from 'react-redux';
import { createProject, fetchProject, updateProject } from '../../../actions/project_actions';
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
  fetchProject : id => dispatch(fetchProject(id)),
  fetchCategories : () => dispatch(fetchCategories()),
  updateProject: id => dispatch(updateProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
