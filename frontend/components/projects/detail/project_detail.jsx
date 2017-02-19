import React from 'react';
import RewardsIndex from '../../rewards/rewards_index';

export default class ProjectDetail extends React.Component{

  constructor(props){
    super(props);
    this.state = { project: ""}
  }
  componentDidMount(){
    this.props.fetchProject(this.props.params.projectId);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.params.projectId !== nextProps.params.projectId){
      this.props.fetchProject(nextProps.params.projectId);
    }
  }

  getRemainingDays(dateCreated){
    const today = new Date();
    const createdAt = new Date(dateCreated)
    const timeDifference = Math.abs(createdAt.getTime() - today.getTime());
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
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
            <h3>By {projectDetail.user.username}</h3>
          </div>
            <div className="title-blurb-container">
            <h1 className='project-detail-title'>{projectDetail.title}</h1>
            <h3 className="project-detail-blurb">{projectDetail.blurb}</h3>
            </div>
          </div>
          <div className="img-stats-detail">
            <h1>IMAGE GOES HERE</h1>
            <div className="percent-complete-detail" style={progressBar}></div>
              <ul className="project-stats-detail">
                    <li><div className='stats-detail' id='current-funding'>${projectDetail.funding}</div>
                    <div className="stat-item-detail">pledged of ${projectDetail.funding_goal}</div></li>
                    <li><div className='stats-detail'>1(for now!)</div>
                    <div className="stat-item-detail">backers</div></li>
                    <li><div className='stats-detail'>{this.getRemainingDays(projectDetail.created_at)}</div>
                    <div className="stat-item-detail">days to go</div></li>
              </ul>
              <button className="backing-button">Back this project</button>
          </div>
          <div className="project-main">
            <section>
              {projectDetail.about}
            </section>
          </div>
        <div className="rewards-side-bar">
          <RewardsIndex rewards={projectDetail.rewards}/>
        </div>
      </div>
    );
  }
};
