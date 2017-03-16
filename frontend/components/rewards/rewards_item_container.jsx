import { connect } from 'react-redux';
import RewardIndexItem from './reward_index_item';
import { createBacking } from '../../actions/backing_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createBacking : (backing) => dispatch(createBacking(backing))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardIndexItem);
