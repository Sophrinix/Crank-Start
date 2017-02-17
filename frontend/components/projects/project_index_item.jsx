import React from 'react';
import { Link, hashHistory } from 'react-router';

// need to add Link to project detail pages

export default class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props);
  }


  render(){

    return (
      <div className="index-item-container">
        <div className="img-container">
          <img className="index-item-image" src={this.props.project.img_url}/>
        </div>
        <div className="description-element">
          <div className="index-item-title">{this.props.project.title}</div>
          <div className="index-item-creator">{this.props.project.creator_id}</div>
          <div className="index-item-description">{this.props.project.description}</div>
        </div>
      </div>
    );
  }
};
