import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCarousel from '../project_slides';

export default class ProjectIndex extends React.Component{
  constructor(props){
    super(props)

    this.categoryContainer = this.categoryContainer.bind(this);
  }

  componentDidMount(){
    this.props.fetchProjects();
  }

  categoryContainer(){
    if (this.props.projects.length > 0){
      const categoryProject = this.props.projects[Math.floor(Math.random() * (0, this.props.projects.length))];
      debugger
      return (
        <div className='category-container'>
          <h2 className="index-sub-header"> Projects We Love</h2>
          <ProjectIndexItem key={categoryProject.id} project={categoryProject}/>
        </div>
      );
    }
  }


  render(){
    const {projects, children } = this.props;
    return (
        <div>
        <carousel className="carousel-slides">
          {ProjectCarousel()}
        </carousel>

        {this.categoryContainer()}

        <div className="projects-index-container">
          <h2 className="index-sub-header">Featured Projects</h2>
              <ul className="projects-index">
                {projects.map(project => <ProjectIndexItem key={project.id} project={project}/>)}
              </ul>
            {children}
        </div>
      </div>
    );
  }
}
