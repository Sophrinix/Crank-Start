import React from 'react';
import { Link, hashHistory} from 'react-router';
import GreetingContainer from './greeting/greeting_container';

//NB USING _handleHeaderClick AS SUB FOR NAV FUNCTIONALITY

export default class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {dropDownClass: 'hide',
                  searchNavClass: 'top search-nav',
                  navLinksClass: 'bottom nav-links',
                  mainNavClass: 'no-overflow',
                  query: "",
                  searchClass: 'way-left',
                  toggleSearch: 'hide-search-results',
                  results: [],
                  leftArrow: 'button-off',
                  rightArrow: 'button-off'};
  }

  _handleHeaderClick(){
    hashHistory.push('/')
  };

  userLoggedIn(){
    return true;
  };

  render(){
    const navLinks = this.userLoggedIn() ?
    (
        <div className="nav-right">
          <div className="nav-filler-a"></div>
          <span onClick={this._handleHeaderClick}>
            <i id="mag" className="clickable material-icons">search</i>
          </span>
          <div className="drop-down-button">
            <i onClick={this._handleHeaderClick} id="dd" className="clickable material-icons">arrow_drop_down</i>
              <div className={this.state.dropDownClass} onMouseLeave={this._mouseDrop}>
                <div className="my-projects">
                  <h3>My Projects</h3>
                  <ul>Here they are!</ul>
                </div>
                <div className="user-options">
                  <h3>Settings</h3>
                  <ul>More settings!</ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="nav-right">
            <div className="nav-filler-b"></div>
            <span id="mag" onClick={this._toggleSearch}><i className="material-icons">search</i></span>
            <span><Link to={'/login'} className="nav-link">Log In</Link></span>
            <span><Link to={'/signup'} className="nav-link">Sign Up</Link></span>
          </div>
        );

        return (

        <div>
          <div className="site-links">
            <div className="nav-left">
              <div className="search-container">
                <form className="search-form" onSubmit={this._handleHeaderClick}>
                  <i id="fred" className="material-icons">search</i>
                  <input type="text"
                    className="search-field"
                    placeholder="Search"
                    value={this.state.query}
                    onChange={this._handleHeaderClick}/>
                </form>
              <span>
                <h3>Explore</h3>
              </span>
              <span>
                <h3>Start A Project</h3>
              </span>
            </div>
            <div className="logo">
              <h1 className="header-h1"
                onClick={this._handleHeaderClick}>
                Crank
                <span className="header-span">
                  Starter
                </span>
              </h1>
            </div>
              <span id="mag">
                <i className="material-icons">search</i>
              </span>
            <GreetingContainer/>
            </div>
          </div>
        </div>

      )
    }
  }
