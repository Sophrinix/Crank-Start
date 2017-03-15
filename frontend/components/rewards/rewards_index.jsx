import React from 'react';
import RewardIndexItem from './rewards_item_container';

export default class RewardIndex extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      styleClass: ""
    }
  }

  componentDidMount(){
  const currentPath = location.hash;
  if (currentPath.includes("rewards")){
    this.setState({ styleClass: "show-reward-index" })
    this.props.fetchProject(this.props.params.projectId);
  }
}


  render(){
    const rewards = this.props.project.rewards;
    const { project, children } = this.props;
    if (!rewards){
      return (<div></div>)
    };
    return (
      <div>
        <ul className={this.state.styleClass}>
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
