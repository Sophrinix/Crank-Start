import React from 'react';
import { hashHistory } from 'react-router'
import { getCurrentUser } from '../../reducers/selectors'

export default class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      userId : window.currentUser.id,
      rewardId: this.props.reward.reward_id
    };
  }



  handleClick(e){
    e.preventDefault();
    debugger
    if (this.state.userId){
      this.props.createBacking(this.state)
    } else {
      console.log('log in!');
    }
  }

  render(){
    return (
      <div className="reward-index-item" onClick={this.handleClick}>
      <h2 className="pledge-amt">Contribute ${this.props.reward.amount} or more</h2>
      <h3 className="reward-item-name">{this.props.reward.name}</h3>
      <div className="reward-item-desc">{this.props.reward.description}</div>
      <div className="reward-item-backers">{this.props.reward.backers.length} backers</div>
      </div>
    )
  }
}
