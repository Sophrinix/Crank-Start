import React from 'react';
import { Link } from 'react-router';
import { categories } from '../../util/api_constants';

export default class ExploreIndex extends React.Component{
  constructor(props){
    super(props);
    this.getCategories = this.getCategories.bind(this);
  }

  getCategories(){
    const keys = Object.keys(categories);
    const linkedCategories = keys.map((key, idx) => {
      const category = categories[key];
      const link = `/explore/categories/${category}`;
      return (
        <li className="explore-link" key={key}><Link to={link}>{category}</Link></li>
      );
    });
    return <ul>{linkedCategories}</ul>
  }

  render(){
    return(
      <div className="explore-list">
        {this.getCategories()}
      </div>
    );
    {children}
  }
}
