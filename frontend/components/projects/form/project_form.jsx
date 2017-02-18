import React from 'react';
import { withRouter } from 'react-router';
import { CountryDropdown } from 'react-country-region-selector';

export default class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      blurb: '',
      about: '',
      img_url: '',
      funding_goal: '',
      duration: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createProject(this.state)
    .then(project => this.props.router.push(`/projects/${project.id}`));
  }

  update(property){
    return (e) => this.setState({ [property]: e.target.value} );
  }

  selectCountry(val){
    this.setState({ country: val })
  }

  displayErrors(){
    if (this.props.errors){
      return (
        this.props.errors.map((error) => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render(){
    return (
      <section>
        <ul>
          {this.displayErrors()}
        </ul>
        <form className="project-form" onSubmit={this.handleSubmit}>
          <label> Give your project a title:
          <input
            type="text"
            placeholder="title..."
            onChange={this.update("title")}
            value={this.state.title} />
          </label>
          <label>
            Your permanent residence
            <CountryDropdown
              value={"country"}
              onChange={(val) => this.selectCountry(val)}/>
          </label>
          <label>
            Short blurb
            <textarea name='blurb-text'
              rows="10" cols="50"></textarea>
          </label>
          <label>
            <input
              type="text"
              value={30}/>
          </label>
          <label>
            Funding goal
            <input
              type="text"
              placeholder={"$0"}/>
          </label>

        </form>
      </section>
    )
  }
}
