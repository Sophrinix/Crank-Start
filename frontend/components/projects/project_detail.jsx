import React from 'react';

export default class ProjectDetail extends React.Component{
  componentDidMount(){
    this.props.fetchProject(this.props.params.projectId);
  }

  _getRemainingTime(dateCreated){
    const today = new Date();
    const timeDifference = Math.abs(dateCreated.getTime() - today.getTime());
    return Math.ceil(timeDifference / (1000 * 3600 * 24));

  }

  render(){

    const { projectDetail, children } = this.props;

    return (
      <div>
        <img src={projectDetail.img_url}></img>
        <div className="author-profile">
          <h3>{projectDetail.author_id}</h3>
          <h3>{projectDetail.created_at}</h3>
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
              <p>{projectDetail.created_at}</p>
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
    );
  }
};
