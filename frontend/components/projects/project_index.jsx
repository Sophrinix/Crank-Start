import React from 'react';
import ProjectIndexItem from './project_index_item';

export default class ProjectIndex extends React.Component{
  componentDidMount(){
    this.props.fetchProjects();
  }

  render(){
    const {projects, children } = this.props;
    return (
    <section className="projects-index">
      <ul>
        {projects.map(project => <ProjectIndexItem key={project.id} project={project}/>)}
      </ul>
      {children}
    </section>
    );
  }
}
