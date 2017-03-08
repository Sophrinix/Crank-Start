import React from 'react';
import { hashHistory } from 'react-router';

export default class Search extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      query: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    this.props.clearSearchResult();

  }

  onChange(e){
    e.preventDefault();
    this.setState({query: e.target.value });
  }

  onSubmit(e){
    this.props.searchProjects(this.state.query).then(() => hashHistory.push('/search'));
  }


  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input id="search-bar" className="search-form" type='text' value={this.state.query}
           onChange={this.onChange} placeholder="Search" ref={(ref) => this.searchField = ref} />/>
      </form>
    );
  }
}
