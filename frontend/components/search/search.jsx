import React from 'react';

export default class Search extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      queryString: ""
    }
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount(){
    this.props.clearSearchResult();
  }

  onChange(e){
    e.preventDefault();
    debugger
    this.setState({ queryString: e.target.value });
    this.props.searchProjects(e.target.value);
  }


  render(){
    return (
      <input className="search-form" type='text' value={this.state.queryString}
        onChange={this.onChange} placeholder="Search"/>
    );
  }
}
