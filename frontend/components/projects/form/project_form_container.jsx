import { connect } from 'react-redux';
import { createProject } from '../../../actions/project_actions';
import ProjectForm from './project_form';
import { fetchCategories } from '../../../actions/category_actions';
import { selectCategories } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  categories: selectCategories(state)
});

const mapDispatchToProps  = (dispatch) => ({
  createProject : project => dispatch(createProject(project)),
  fetchCategories : () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
