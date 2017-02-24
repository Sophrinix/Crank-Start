import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUserProjects, fetchProjects } from '../../actions/project_actions';
import { selectProjects } from '../../reducers/selectors';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
  // userProjects: selectProjects(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
  //fetchUserProjects: (userId) => dispatch(fetchProjects(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
