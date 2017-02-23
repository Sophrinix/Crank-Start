import React from 'react';
import RewardIndexItem from './rewards_item_container';

export default class RewardIndex extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const rewards = this.props.project.rewards;
    if (!rewards){
      return (<div><h1>No rewards yet</h1></div>)
    };
    return (
      <div>
        <h2>Rewards</h2>
        <ul>
          {rewards.sort((x, y) => {
            return x.amount - y.amount
          }).map(reward => {
            return <li key={reward.reward_id}>
              <RewardIndexItem
              updateProjectStatus={this.props.updateProjectStatus}
              reward={reward}/> </li>
          })}
        </ul>
      </div>
    );
  };
}
