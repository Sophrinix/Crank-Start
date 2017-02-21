import React from 'react';
import ProjectIndexItem from '../projects/index/project_index_item';

export default class SearchIndex extends React.Component{
  constructor(props){
    super(props)
  }


  ///add selector to this

  render(){
    const projects = this.props.searchResult
    debugger
    return (
        <div>

        <h2 className="index-sub-header">Search Results</h2>
        <div className="projects-index-container">
              <ul className="projects-index">
                {projects.map(project => <ProjectIndexItem key={project.id} project={project}/>)}
              </ul>
            {this.props.children}
        </div>
      </div>
    );
  }
}
