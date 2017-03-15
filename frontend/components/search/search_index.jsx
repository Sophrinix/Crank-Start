import React from 'react';
import ProjectIndexItem from '../projects/index/project_index_item';
import SearchContainer from './search_container';

export default class SearchIndex extends React.Component{
  constructor(props){
    super(props)
  }



  render(){
    const projects = this.props.searchResult
    if (_.isEmpty(projects)){
      return(
        <div>
        <h2> Search for a project </h2>
        <SearchContainer props={this.props}/>
        </div>
      );
    }
    else {
      debugger
      return (
          <div>
          <h2 className="index-sub-header">Search Results</h2>
            <div className="projects-index-container">
              <ul className="projects-index">
                {projects.map(project => <ProjectIndexItem key={project.id} project={project}/>)}
              </ul>
            </div>
        </div>
      );
    }
  }
}
