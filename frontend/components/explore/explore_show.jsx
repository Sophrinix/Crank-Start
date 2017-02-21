import React from 'react';
import {Link, hashHistory } from 'react-router';

export default class ExploreShow extends React.Component {
  constructor(props) {
    super(props);
    this.formatProjects = this.formatProjects.bind(this);
    this.onClickLinkToShowProject = this.onClickLinkToShowProject.bind(this);
  }

  componentWillMount() {
    this.props.categorySearch(this.props.params.category_name);
  }


  onClickLinkToShowProject(idx) {
    return () => {
      hashHistory.push(`/projects/${idx}`);
    };
  }

  formatProjects() {
    const { projects } = this.props;
    if (!projects) {
      return <div></div>;
    }

    const projectsKeyArray = Object.keys(projects);
    const formattedProjects = projectsKeyArray.map((key, idx) => {
      return (
        <div key={idx} className='project_preview_box'>
          <div className='preview_picture'><img src={projects[key].image_url} onClick={this.onClickLinkToShowProject(key)} /></div>
          <div className='preview_title'><h1>{projects[key].title}</h1></div>
          <div className='preview_author_name'><h2 className='author_name'> {projects[key].author_name}</h2></div>
          <p>{projects[key].short_blurb}</p>
          <div className='location_div'><i className="material-icons md-13 md-gray">location_on</i><h2>{projects[key].location_name}</h2></div>
          <meter className='fund_bar' min="0" max={projects[key].goal_amount} value={projects[key].total_funded}></meter>
          <div className='preview_stat'>
            <ul>
              <li className='li_bold'>{projects[key].percentage_funded}%</li>
              <li>funded</li>
            </ul>
            <ul>
              <li className='li_bold'>${projects[key].total_funded}</li>
              <li>pleged</li>
            </ul>
            <ul>
              <li className='li_bold'>{projects[key].days_ahead}</li>
              <li>days to go</li>
            </ul>
          </div>

        </div>
      );
    });
    return formattedProjects;
  }


  render() {
    return (
      <div>{this.formatProjects()}</div>
    );
  }
}
