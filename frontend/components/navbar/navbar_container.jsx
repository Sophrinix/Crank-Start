import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserProjects, fetchProjects } from '../../actions/project_actions';
import { selectProjects } from '../../reducers/selectors';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  projects: selectProjects(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
