import React from 'react';
import ProjectIndexItem from './project_index_item';

export default class ProjectIndex extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log('index mounted');
    this.props.fetchProjects();
  }

  render(){
    const {projects, children } = this.props;
    console.log('rendering index!');
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
