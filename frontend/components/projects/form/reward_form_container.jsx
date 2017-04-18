import { connect } from 'react-redux';
import { createReward } from '../../../actions/reward_actions';
import RewardForm from './reward_form';
import { selectCategories } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  session: state.session
});

const mapDispatchToProps  = (dispatch) => ({
  fetchProject : id => dispatch(fetchProject(id)),
  fetchCategories : () => dispatch(fetchCategories()),
  updateProject: id => dispatch(updateProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm);
