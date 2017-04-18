import React from 'react';
import { hashHistory } from 'react-router';

export default class RewardForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title: '',
      body: '',
      projectId: "",
      errors: ''

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.displayErrors = this.displayErrors.bind(this);
    this.setProjectState = this.setProjectState.bind(this);
  }

  componentDidMount(){
    if (this.props.params.projectId !== undefined){
      const projectId = this.props.params.projectId;
      this.setState({ projectId: projectId })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();

    Object.keys(this.state).forEach(key => {
      formData.append(`reward[${key}]`, this.state[key])
    })
  }

  checkLoggedIn(){
    if (this.props.session.currentUser === null){
      hashHistory.push('/login');
    } else {
      const authorId = this.props.session.currentUser.id;
      this.setState({ 'author_id' : authorId })
    }
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

      <div className="parent-div">
        <div className='form-title'>
          <h2 className="hh2">Add Rewards to Your Project!</h2>
          </div>
        <div className="project-form">
        <form className="project-form" onSubmit={this.handleSubmit}>

          <ul>
            <li className="project-form-li">
              <div className="form-item">
                <div className="label-wrapper"><label>Project title</label></div>
                <div className="form-wrapper">
                  <input type="text"
                         onChange={this.update("title")}
                         value={this.state.title} />
                 </div>
               </div>
            </li>
            <div>
              <li className="project-form-li">
                <div className="form-item">
                  <div className="label-wrapper"><label>Upload a picture for your project</label></div>
                  <div className="form-wrapper">
                    <input type="file"
                           onChange={this.updateFile}/>
                   </div>
                 </div>
              </li>
            </div>
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
                <div className="label-wrapper"><label>Location</label></div>
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
                         placeholder="0"
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

                  <select className="select-bar" value={'1'} onChange={this.update("category_id")}>
                    {this.getCategories()}</select>
                </div>
              </div>
            </li>
              <h5 className="project-error-message">{this.state.errors}</h5>
              <li className="project-form-li">
                <img src={this.state.imageUrl}/>
                  <ul>
                    {this.displayErrors()}
                  </ul>
                <input type="submit" onClick={this.displayErrors} value="Quack Start it!" className="form-submit-button"/>
              </li>
          </ul>
        </form>
      </div>
    </div>
  );
  }
}
