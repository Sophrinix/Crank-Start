import React from 'react';
import {Link, hashHistory } from 'react-router';
import ProjectIndexItem from '../projects/index/project_index_item';

export default class ExploreShow extends React.Component {
  constructor(props) {
    super(props);
    this.onClickLinkToShowProject = this.onClickLinkToShowProject.bind(this);
  }

  componentWillMount() {
    this.props.categorySearch(this.props.params.category);
  }

  onClickLinkToShowProject(idx) {
    return () => {
      hashHistory.push(`/projects/${idx}`);
    };
  }




  render() {
    const {projects} = this.props;
    debugger
    if (!Object.keys(projects).length){
      return (<div></div>)
    }
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
