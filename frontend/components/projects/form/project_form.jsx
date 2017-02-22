import React from 'react';
import { withRouter } from 'react-router';
import { CountryDropdown } from 'react-country-region-selector';
import { categories } from '../../../util/api_constants';

export default class ProjectForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      blurb: '',
      about: '',
      img_url: '',
      funding_goal: '',
      duration: '',
      author_id: parseInt(store.getState().session.currentUser.id),
      city: '',
      state: '',
      complete: 'false',
      category: '',
      errors: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCategories = this.getCategories.bind(this);
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

  getCategories(){
    const keys = Object.keys(categories);
    const categoriesList = keys.map((key, idx) => {
      const category = categories[key];
      const link = `/explore/categories/${category}`;
      return (
        <li>{category}</li>
      );
    });
    return <ul>{categoriesList}</ul>
  }


  render(){
    return (
      <div className="parent-div">
        <div className='form-title'>
          <h2 className="hh2">Get involved!</h2>
          </div>
        <ul>
          {this.displayErrors()}
        </ul>
        <div className="project-form">
        <form className="project-form" onSubmit={this.handleSubmit}>
          <ul>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label>Wish title</label></div>
                <div className="form-wrapper">
                  <input type="text"
                         onChange={this.update("title")}
                         value={this.state.title} />
                 </div>
               </div>
            </li>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label>Write a short blurb about your project here</label></div>
                <div className="form-wrapper">
                  <textarea
                         className="blurb-input"
                         rows="4"
                         cols="60"
                         onChange={this.update("blurb")}
                         value={this.state.blurb}></textarea>
                </div>
              </div>
            </li>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label>Write a more detailed description of your project here</label></div>
                <div className="form-wrapper">
                  <textarea
                         className="content-input"
                         rows="10"
                         cols="60"
                         onChange={this.update("about")}
                         value={this.state.about}></textarea>
                </div>
              </div>
            </li>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label>Wish Location</label></div>
                <div className="form-wrapper">
                  <input type="text"
                         id="project-city"
                         placeholder="City"
                         onChange={this.update("city")}
                         value={this.state.city} />,
                  <input type="text"
                         placeholder="State"
                         id="project-state"
                         onChange={this.update("state")}
                         value={this.state.state} />
                </div>
              </div>
            </li>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label>Project Duration</label></div>
                <div className="form-wrapper">
                  <input type="number"
                         onChange={this.update("duration")}
                         className="n-input"
                         placeholder="30"
                         value={this.state.duration} />
                </div>
              </div>
            </li>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label> How much funding do you hope to raise?</label></div>
                <div className="form-wrapper">
                  <input type="number"
                         placeholder="$0"
                         className="n-input"
                         onChange={this.update("funding_goal")}
                         value={this.state.funding_goal} />
                </div>
              </div>
            </li>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label> Select a category for your project</label></div>
                <div className="form-wrapper">
                  $<input type="text"
                         placeholder="Category goes here"
                         className="n-input"
                         onChange={this.update("category")}
                         value={this.state.category} />
                </div>
              </div>
            </li>
              <h5 className="project-error-message">{this.state.errors}</h5>
              <li className="project-form-li">
                <input type="submit" value="Crank Start it!" className="form-submit-button"/>
              </li>
          </ul>
        </form>
      </div>
    </div>
  );
  }
}
