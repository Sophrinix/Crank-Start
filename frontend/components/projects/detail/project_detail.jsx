import React from 'react';
import RewardsIndex from '../../rewards/rewards_index';
import { hashHistory } from 'react-router';

export default class ProjectDetail extends React.Component{

  constructor(props){
    super(props);
    this.state = { project: "",
                   funding: "",
                   backers: "",
                   timeRemaining: ""}

  // this.updateProjectStatus = this.updateProjectStatus.bind(this);
  this.filterUniqueBackers = this.filterUniqueBackers.bind(this);
  this.getRemainingDays = this.getRemainingDays.bind(this);
  this.linkToRewards = this.linkToRewards.bind(this);
  this.userLoggedIn = this.userLoggedIn.bind(this);
  }

  componentDidMount(){
    this.props.fetchProject(this.props.params.projectId)
    .then((action) => {
      const projectFunding = action.project.funding;
      const allBackers = action.project.backers;
      const uniqueBackers = this.filterUniqueBackers(allBackers);
      this.setState({funding: projectFunding})
      this.setState({backers: uniqueBackers})
    });
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.projectId !== nextProps.params.projectId){
      this.props.fetchProject(nextProps.params.projectId);
    }
  }

  linkToRewards(){
    if (this.userLoggedIn()){
      hashHistory.push(`/login`);
    } else {
      const project = this.props.projectDetail;
      hashHistory.push(`/projects/${project.id}/rewards`);
    }
  }

  userLoggedIn(){
    return this.props.session.currentUser !== null;
  }


  filterUniqueBackers(backers){
    const uniqueBackers = [];
    for (var i = 0; i < backers.length; i++) {
      if (!uniqueBackers.includes(backers[i].user)){
        uniqueBackers.push(backers[i].user);
      }
    }
    return uniqueBackers.length;
  }

  getRemainingDays(){
    const today = new Date();
    const createdAt = new Date(this.props.projectDetail.created_at)
    const timeDifference = Math.abs(createdAt.getTime() - today.getTime());
    const projectDuration = this.props.projectDetail.duration;
    const timeRemaining = projectDuration - Math.ceil(timeDifference / (1000 * 3600 * 24));
    return timeRemaining < 0 ? "0" : timeRemaining;
  }

  getDate(dateCreated){
    const dateMade = new Date(dateCreated);
    return `First created: ${dateMade.getMonth() + 1}/${dateMade.getDay() + 1}`;
  }

  render(){

    const { projectDetail, children } = this.props;
    const currentFunding = Math.floor((projectDetail.funding/projectDetail.funding_goal)*100)
    const progressBar = { width: currentFunding + "%" }

    if (!projectDetail.created_at){
      return (<div></div>)
    }
    return (
      <div className="project-detail">
        <div className="project-header">
          <div className="author-info">
            <img className="user-avatar" src="https://ksr-ugc.imgix.net/missing_user_avatar.png?w=40&h=40&fit=crop&v=&auto=format&q=92&s=8c0db61c92692000c2678b375fc31714"/>
            <h3>By {projectDetail.user.username}</h3>
          </div>
            <div className="title-blurb-container">
            <h1 className='project-detail-title'>{projectDetail.title}</h1>
            <h3 className="project-detail-blurb">{projectDetail.blurb}</h3>
            </div>
          </div>
          <div className="img-stats-detail">
            <img className="detail-image" src={projectDetail.img_url} width="767" height="431"/>
            <div className="detail-stats-list">
              <ul className="project-stats-detail">
                    <div className="percent-complete-detail" style={progressBar}></div>
                    <li><div className='stats-detail' id='current-funding'>${this.state.funding}</div>
                    <div className="stat-item-detail">pledged of ${projectDetail.funding_goal}</div></li>
                    <li><div className='stats-detail'>{this.state.backers}</div>
                    <div className="stat-item-detail">backers</div></li>
                    <li><div className='stats-detail'>{this.getRemainingDays()}</div>
                    <div className="stat-item-detail">days to go</div></li>
                    <button type="button" onClick={this.linkToRewards}>Back this project</button>
              </ul>
            </div>
          </div>
          <div className="project-main">
            <div className="project-about">
              <h2>About this project</h2>
              {projectDetail.about}
            </div>
            <div className="rewards-side-bar">
              <RewardsIndex updateProjectStatus={this.updateProjectStatus} project={projectDetail}/>
            </div>
          </div>
          { children }
      </div>
    );
  }
};
