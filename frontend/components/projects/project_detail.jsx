import React from 'react';

export default class ProjectDetail extends React.Component{
  componentDidMount(){
    this.props.fetchProject(this.props.params.projectId);
  }

  render(){

    const { projectDetail, children } = this.props;
    debugger
    return (
      <section>
        <figure>
          <h2>{projectDetail.title}</h2>
          <img src={projectDetail.img_url}/>
        </figure>
      </section>
    );
  }
};
