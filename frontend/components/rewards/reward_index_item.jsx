import React from 'react';
import { hashHistory } from 'react-router'
import * as APIUtil from '../../util/project_api_util';

export default class ReactIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
      <h2 className="pledge-amt">Pledge ${this.props.reward.amount} or more</h2>
      <h3 className="reward-item-name">{this.props.reward.name}</h3>
      <div className="reward-item-desc">{this.props.reward.description}</div>
      </div>
    )
  }
}
