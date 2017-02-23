import React from 'react';
import { hashHistory } from 'react-router'
import { getCurrentUser } from '../../reducers/selectors'

export default class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      reward_id: this.props.reward.reward_id,
      backer_id : this.props.currentUser.id
    };
    this.displayBackers = this.displayBackers.bind(this);
  }



  handleClick(e){
    e.preventDefault();
    const amount = this.props.reward.amount;
    this.props.updateProjectStatus(amount);
    if (this.state.backer_id){
      this.props.createBacking(this.state)
    }
  }

  displayBackers(){
    const backers = this.props.reward.backers
    const uniqueBackers = [];
    for (var i = 0; i < backers.length; i++) {
      if (!uniqueBackers.includes(backers[i].user)){
        uniqueBackers.push(backers[i].user);
      }
    }

    if (uniqueBackers.length === 1){
      return "1 backer";
    } else {
      return `${uniqueBackers.length} backers`;
    }
  }

  render(){
    return (
      <div className="reward-index-item" onClick={this.handleClick}>
      <h2 className="pledge-amt">Contribute ${this.props.reward.amount} or more</h2>
      <h3 className="reward-item-name">{this.props.reward.name}</h3>
      <div className="reward-item-desc">{this.props.reward.description}</div>
      <div className="reward-item-backers">{this.displayBackers()}</div>
      </div>
    )
  }
}
