import React from 'react';
import ProjectIndexItem from '../projects/index/project_index_item';
import { Link } from 'react-router';

export default class ExploreShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.categorySearch(this.props.params.category);
  }


  render() {
    const {projects} = this.props;
    if (!Object.keys(projects).length){
      return (
        <div>
          <h2 className="index-sub-header">There don't appear to be any projects like that,
            <Link to={"/projects/new"} className="nav-link">feel like starting one?</Link>
          </h2>
        </div>
      );
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
