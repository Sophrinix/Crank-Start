import React from 'react';
import { Link, hashHistory } from 'react-router';

// need to add Link to project detail pages

export default class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props);

    this.linkToDetail = this.linkToDetail.bind(this);
    this.getRemainingDays = this.getRemainingDays.bind(this);

  }

  linkToDetail(e){
    e.preventDefault()
    hashHistory.push(`/projects/${this.props.project.id}`)
  }

  getRemainingDays(dateCreated){
    const today = new Date();
    const createdAt = new Date(dateCreated)
    const timeDifference = Math.abs(createdAt.getTime() - today.getTime());
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
  }


  render(){

    const currentFunding = Math.floor((this.props.project.funding/this.props.project.funding_goal)*100)
    const progressBar = { width: currentFunding + "%" }

    const { project } = this.props;

    return (
      <div className="index-item-container">
        <div className="img-container"
             onClick={this.linkToDetail}>
          <img className="index-item-image" src={project.img_url} />
        </div>
        <div className="project-detail">
        <div className="description-element">
          <div className="index-item-title"
               onClick={this.linkToDetail}>{project.title}</div>
          <div className="index-item-creator">by {project.user.username}</div>
          <br/>
          <div className="index-item-description">{project.blurb}</div>
        </div>
        <br/>
          <div className="project-status">
            <div className="location-container">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <div>{project.city}, {project.state}</div>
            </div>
              <div className="percent-complete" style={progressBar}></div>
                <ul className="project-stats">
                  <li><div className="ind-stats">{currentFunding}%</div>
                    <div className="stat-item">funded</div></li>
                      <li><div className="ind-stats">${project.funding}</div>
                      <div className="stat-item">pledged</div></li>
                      <li><div className="ind-stats">{this.getRemainingDays(project.created_at)}</div>
                      <div className="stat-item">days to go</div></li>
                </ul>
          </div>
        </div>
      </div>
    );
  }
};
