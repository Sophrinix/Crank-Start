import { connect } from 'react-redux';
import ProjectIndex from './project_index';

import {fetchProjects} from '../../../actions/project_actions';
import { selectProjects } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  projects: selectProjects(state)
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
