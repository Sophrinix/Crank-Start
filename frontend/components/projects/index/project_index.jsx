import React from 'react';
import ProjectIndexItem from './project_index_item';
import ProjectCarousel from '../project_slides';
import ExploreIndex from '../../explore/explore_index';

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
      return (
        <div className="index-category-tab">
          <h2 className="index-sub-header"> Projects We Love: </h2>
        <div className="special">
          <ProjectIndexItem key={categoryProject.id} project={categoryProject}/>
        </div>
        <div className='categories-list'>
          <ExploreIndex props={this.props}/>
        </div>
      </div>
      );
    }
  }


  render(){
    const {projects, children } = this.props;
    const projectsSlice = projects.slice(0,3);

    return (
        <div>
        <carousel className="carousel-slides">
          {ProjectCarousel()}
        </carousel>

        {this.categoryContainer()}

        <div className="projects-index-container">
          <h2 className="index-sub-header">Featured Projects</h2>
              <ul className="projects-index">
                {projectsSlice.map(project => <ProjectIndexItem key={project.id} project={project}/>)}
              </ul>
            {children}
        </div>
      </div>
    );
  }
}
