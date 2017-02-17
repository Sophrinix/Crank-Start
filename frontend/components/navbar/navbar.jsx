import React from 'react';
import { Link, hashHistory} from 'react-router';


//NB USING _handleHeaderClick AS SUB FOR NAV FUNCTIONALITY

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
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

    this._handleDrop = this._handleDrop.bind(this);
    this._userLoggedIn = this._userLoggedIn.bind(this);
    this._logoutUser = this._logoutUser.bind(this);
  }



  componentWillReceiveProps(){
    this.state = {dropDownClass: 'hide',
                  results: [],
                  leftArrow: 'button-off',
                  rightArrow: 'button-off'};
  }

  _sessionLinks() {
    return(
    <nav className="login-signup">
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" activeClassName="current">Sign up!</Link>
    </nav>
  );
  }

  _personalGreeting(currentUser, logout){
    return (
  	<hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
  	</hgroup>
    );
  }

  _greeting({ currentUser, logout }){
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
  }

  _handleHeaderClick(){
    hashHistory.push('/');
  }


  _handleDrop(e){
    e.stopPropagation();
    if (this.state.dropDownClass === 'show'){
      this.setState({ dropDownClass: 'hide', mainNavClass: 'no-overflow'})
    } else {
      this.setState({dropDownClass: 'show', mainNavClass: 'overflow' })
    }
  }

  _handleChange(){

  }

  _handleScroll(){

  }

  _toggleSearch(){

  }

  _userLoggedIn(){
    return this.props.currentUser !== null;
  }

  _logoutUser(e){
    e.preventDefault();
    this.props.logout();
  }



  render(){
    const navLinks = this._userLoggedIn() ?
    (
        <div className="nav-right">
          <div className="nav-filler-a"></div>
          <span onClick={this._handleHeaderClick}>
            <i id="mag" className="clickable material-icons">search</i>
          </span>
          <div className="drop-down-button">
            <i onClick={this._handleDrop} id="drop-down-menu" className="clickable material-icons">arrow_drop_down</i>
              <div className={this.state.dropDownClass} onMouseLeave={this._mouseDrop}>
                <div className="my-projects">
                  <h3>My Projects</h3>
                  <ul>Here they are!</ul>
                </div>
                <div className="user-options">
                  <h3>Settings</h3>
                  <ul>
                    <li className="logout drop-li" onClick={this._logoutUser}>Logout</li>
                  </ul>
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
          <nav className={this.state.mainNavClass}>
            <div className={this.state.searchNavClass}>
              <div className="nav-left">
                <div className="search-container">
                  <div className={this.state.searchClass}>
                    <form className="search-form" onSubmit={this._onSubmit}>
                      <i id="fred" className="material-icons">search</i>
                      <input type="text"
                             className="search-field"
                             placeholder="Search"
                             value={this.state.query}
                             onChange={this._handleChange}
                             ref={(ref) => this.searchField = ref} />

                    </form>
                  </div>
                </div>
              </div>
              <div className="nav-right" onClick={this._toggleSearch}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            </div>
            <div className={this.state.navLinksClass}>
              <div className="site-links">
                <div className="nav-left">
                  <span >
                    <Link to={'/explore'}
                            className="nav-link">
                            <img className="compass-icon" src={compassIcon}/>
                            Explore
                    </Link>
                  </span>
                  <span >
                    <Link to={'/projects/new'}
                          className="nav-link">
                        Contribute
                    </Link>
                  </span>
                  <span >
                    <a href='https://www.linkedin.com/in/eversjames'
                          className="nav-link">
                        About
                    </a>
                  </span>
                </div>
              </div>
              <div className="logo">
                <h1 className="header-h1"
                    onClick={this._handleTitleClick}>
                  Crank
                  <span className="header-span">
                    Start
                  </span>
                </h1>
              </div>
              <div className="user-links">
                {navLinks}
              </div>
            </div>
          </nav>
          <div className="s-results-outer">
            <div className={this.state.leftArrow}
                 id="left-arrow"
                 onClick={this._handleScroll(1)}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <h2>Search Results here</h2>

            <div className={this.state.rightArrow}
                 id="right-arrow"
                 onClick={this._handleScroll(-1)}>
              <i className='fa fa-chevron-right' aria-hidden='true'></i>
            </div>
          </div>
        </div>
      );
    }
  }
