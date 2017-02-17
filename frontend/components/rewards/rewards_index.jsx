import React from 'react';
import RewardIndexItem from './reward_index_item';

export default class RewardIndex extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    if (!this.props.rewards){
      return (<div><h1>No rewards yet</h1></div>)
    };
    return (
      <div>
        <h2>Rewards</h2>
        <ul>
          {this.props.rewards.sort((x, y) => {
            return x.amount - y.amount
          }).map(reward => {
            return <li key={reward.reward_id}><RewardIndexItem reward={reward} /></li>
          })}
        </ul>
      </div>
    );
  };
}
