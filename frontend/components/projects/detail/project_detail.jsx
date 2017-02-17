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

  _getRemainingDays(dateCreated){
    const today = new Date();
    const createdAt = new Date(dateCreated)
    const timeDifference = Math.abs(createdAt.getTime() - today.getTime());
    return Math.ceil(timeDifference / (1000 * 3600 * 24));
  }

  render(){

    const { projectDetail, children } = this.props;

    if (!projectDetail.created_at){
      return (<div></div>)
    }


    return (
      <div>
        <div className="project-info">
          <img src={projectDetail.img_url}></img>
          <div className="author-profile">
            <h3>{projectDetail.author_id}</h3>
          </div>
          <div className="project-header">
            <h1>{projectDetail.title}</h1>
            <h3>{projectDetail.blurb}</h3>
            <span className="project-funding">
              <div className="project-progress">
                {projectDetail.funding}
                <p>Pledged of {projectDetail.funding_goal}</p>
              </div>
              <div className="backers">
                <p>Backers go here</p>
              </div>
              <div className="remaining-days">
                {this._getRemainingDays(projectDetail.created_at)}
                <p>days to go</p>
              </div>
              <button>Back this project</button>
            </span>
          </div>
          <div className="project-main">
            <h2>About this project</h2>
            <section>
              {projectDetail.about}
            </section>
          </div>
        </div>
        <div className="rewards-side-bar">
          <RewardsIndex rewards={projectDetail.rewards}/>
        </div>
      </div>
    );
  }
};
