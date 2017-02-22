import React from 'react';
import { hashHistory } from 'react-router'
import * as APIUtil from '../../util/project_api_util';

export default class RewardIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const amtContributed = this.props.reward.amount
    this.props.contributeFunding(amtContributed);
  }

  render(){
    return (
      <div className="reward-index-item" onClick={this.handleClick}>
      <h2 className="pledge-amt">Contribute ${this.props.reward.amount} or more</h2>
      <h3 className="reward-item-name">{this.props.reward.name}</h3>
      <div className="reward-item-desc">{this.props.reward.description}</div>
      <div className="reward-item-backers">{this.props.reward.backers} backers</div>
      </div>
    )
  }
}
