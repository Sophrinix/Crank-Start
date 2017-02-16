import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCarousel from './project_slides';

export default class ProjectIndex extends React.Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.fetchProjects();
  }

  render(){
    const {projects, children } = this.props;
    return (
      <div>
        <div>
          {ProjectCarousel}
        </div>
    <section className="projects-index">
      <ul>
        {projects.map(project => <ProjectIndexItem key={project.id} project={project}/>)}
      </ul>
      {children}
    </section>
    </div>
    );
  }
}
