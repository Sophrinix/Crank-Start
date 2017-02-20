import React from 'react';
import { Link, hashHistory} from 'react-router';
import Search from '../search/search';


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

    this.handleDrop = this.handleDrop.bind(this);
    this.userLoggedIn = this.userLoggedIn.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.searchProjects = this.searchProjects.bind(this);
  }



  componentWillReceiveProps(){
    this.state = {dropDownClass: 'hide',
                  results: [],
                  leftArrow: 'button-off',
                  rightArrow: 'button-off'};
  }

  sessionLinks() {
    return(
    <nav className="login-signup">
      <Link to="/login" activeClassName="current">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup" activeClassName="current">Sign up!</Link>
    </nav>
  );
  }

  personalGreeting(currentUser, logout){
    return (
  	<hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
  	</hgroup>
    );
  }

  greeting({ currentUser, logout }){
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
  }

  handleTitleClick(){
    hashHistory.push('/');
  }


  handleDrop(e){
    e.stopPropagation();
    if (this.state.dropDownClass === 'show'){
      this.setState({ dropDownClass: 'hide', mainNavClass: 'no-overflow'})
    } else {
      this.setState({dropDownClass: 'show', mainNavClass: 'overflow' })
    }
  }

  handleChange(e){
    this.setState({ query: e.target.value,
                    results: [],
                    toggleSearch: 'show-search-results',
                    leftArrow: 'button-off'

                  });
  }

  onSubmit(e){
    e.preventDefault();


  }

  handleScroll(){

  }

  searchProjects(query){
    debugger
    const searchQuery = query.target.value;
    const searchResults = [];
    const allProjects = store.getState().projects;
    const parseQuery = searchQuery.split(" ").map(q => q.toLowerCase());
    Object.keys(allProjects).forEach((project) => {
      if (searchResults.length === 15){
        return searchResults;
      }
      if (allProjects[project].title.toLowerCase().indexOf(parseQuery[i] !== -1)){
        searchResults.push(allProjects[project]);
        //break;
      }
    });
    return searchResults;

  }

  toggleSearch(){

    if (this.state.searchNavClass.slice(0,3) === 'top'){
      this.setState({ searchNavClass: 'bottom search-nav',
      navLinksClass: 'off nav-links',
      mainNavClass: 'no-overflow',
      searchClass: 'just-right'})
    this.searchField.focus();
  } else {
    this.setState({searchNavClass: 'top-search-nav',
                   searchClass: 'way-left',
                   navLinksClass: 'bottom nav-links',
                   results: [],
                   query: "",
                   leftArrow: "button-off",
                   rightArrow: "button-off"
                 })
              }
          }

  userLoggedIn(){
    return this.props.currentUser !== null;
  }

  logoutUser(e){
    e.preventDefault();
    this.props.logout();
  }



  render(){
    const navLinks = this.userLoggedIn() ?
    (
        <div className="nav-right">
          <div className="nav-filler-a"></div>
          <span onClick={this.toggleSearch}>
            <i id="mag" className="clickable material-icons">search</i>
          </span>
          <div className="drop-down-button">
            <img src="https://ksr-ugc.imgix.net/missing_user_avatar.png?w=40&h=40&fit=crop&v=&auto=format&q=92&s=8c0db61c92692000c2678b375fc31714"
               onClick={this.handleDrop}className="user-avatar"/>
              <div className={this.state.dropDownClass} onMouseLeave={this.mouseDrop}>
                <div className="my-projects">
                  <h3>My Projects</h3>
                  <ul>Here they are!</ul>
                </div>
                <div className="user-options">
                  <h3>Settings</h3>
                  <ul>
                    <li className="logout drop-li" onClick={this.logoutUser}>Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="nav-right">
            <div className="nav-filler-b"></div>
            <span id="mag" onClick={this.toggleSearch}><i className="material-icons">search</i></span>
            <span><Link to={'/login'} className="nav-link">Log In</Link></span>
            <span><Link to={'/signup'} className="nav-link">Sign Up</Link></span>
          </div>
        );

        return (

          <div className="navbar-main">
          <nav className={this.state.mainNavClass}>
            <div className={this.state.searchNavClass}>
              <div className="nav-left">
                <div className="search-container">
                  <div className={this.state.searchClass}>
                    <form className="search-form" onSubmit={this.searchProjects}>
                      <i id="fred" className="material-icons">search</i>
                      <input type="text"
                             className="search-field"
                             placeholder="Search"
                             value={this.state.query}
                             onChange={this.handleChange}
                             ref={(ref) => this.searchField = ref} />

                    </form>
                  </div>
                </div>
              </div>
              <div className="nav-right" onClick={this.toggleSearch}>
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
                    <a href='#'
                          className="nav-link">
                        About
                    </a>
                  </span>
                </div>
              </div>
              <div className="logo"
                onClick={this.handleTitleClick}>
                <h1 className="header-h1">
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
                 onClick={this.handleScroll(1)}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <h2>Search Results here</h2>

            <div className={this.state.rightArrow}
                 id="right-arrow"
                 onClick={this.handleScroll(-1)}>
              <i className='fa fa-chevron-right' aria-hidden='true'></i>
            </div>
          </div>
        </div>
      );
    }
  }
