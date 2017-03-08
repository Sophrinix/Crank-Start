import { connect } from 'react-redux';
import RewardIndex from './rewards_index';

import {fetchProject} from '../../actions/project_actions';
import { selectProjects } from '../../reducers/selectors';

const mapStateToProps = ({ projectDetail, session}) => ({
  project: projectDetail,
  session
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardIndex);
