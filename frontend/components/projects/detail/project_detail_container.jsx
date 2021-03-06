import { connect } from 'react-redux';
import ProjectDetail from './project_detail';
import { fetchProject } from '../../../actions/project_actions';

const mapStateToProps = ({ projectDetail, session}) => ({
  projectDetail,
  session
});

const mapDispatchToProps = dispatch => ({
  fetchProject: (id) => dispatch(fetchProject(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);
