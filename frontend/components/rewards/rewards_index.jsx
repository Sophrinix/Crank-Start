import React from 'react';
import RewardIndexItem from './rewards_item_container';

export default class RewardIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      styleClass: ""
    }
  }

  checkPath(){
    const currentPath = location.hash;
    return currentPath.includes("rewards");
  }

  componentDidMount() {
  const currentPath = location.hash;
  if (this.checkPath() === true){
    this.setState({ styleClass: "show-reward-index" })
    this.props.fetchProject(this.props.params.projectId);
    }
  }


  render() {
    const { project, children } = this.props;
    const rewards = project.rewards;
    const header = this.checkPath() === true ? "Back a project!" : "";
    if (!rewards){
      return (<div></div>)
    };
    return (
      <div>
        <h2 className="rewards-h2">{header}</h2>
        <ul className={this.state.styleClass}>
          {rewards.slice(0,5).sort((x, y) => {
            return x.amount - y.amount
          }).map(reward => {
            return (
            <li key={reward.reward_id}>
              <RewardIndexItem
              project={project}
              updateProjectStatus={this.props.updateProjectStatus}
              createBacking={this.props.createBacking}
              reward={reward}/> </li>
          )
          })}
        </ul>
      </div>
    );
  };
}
