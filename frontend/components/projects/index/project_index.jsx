import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCarousel from '../project_slides';

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
        <carousel className="carousel-slides">
          {ProjectCarousel()}
        </carousel>
        <h2 className="index-sub-header">Featured Projects</h2>
        <div className="projects-index-container">
              <ul className="projects-index">
                {projects.map(project => <ProjectIndexItem key={project.id} project={project}/>)}
              </ul>
            {children}
        </div>
      </div>
    );
  }
}
