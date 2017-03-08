import React from 'react';
import RewardIndexItem from './rewards_item_container';

export default class RewardIndex extends React.Component{
  debugger
  constructor(props){
    super(props)
  }

  render(){
    debugger

    const rewards = this.props.project.rewards;
    const project = this.props.project;
    if (!rewards){
      return (<div><h1>No rewards yet</h1></div>)
    };
    return (
      <div>
        <ul>
          {rewards.slice(0,5).sort((x, y) => {
            return x.amount - y.amount
          }).map(reward => {
            return <li key={reward.reward_id}>
              <RewardIndexItem
              project={project}
              updateProjectStatus={this.props.updateProjectStatus}
              reward={reward}/> </li>
          })}
        </ul>
      </div>
    );
  };
}
