import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import RewardIndex from './rewards_index';

import { selectBackers } from '../../../reducers/selectors';

const mapStateToProps = state => ({
  rewards: selectRewards(state)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardIndex);
