 import React from 'react';
import { Link, hashHistory} from 'react-router';
import SearchContainer from '../search/search_container';
import ProjectIndexContainer from '../projects/index/project_index_container';


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
    this.getUserProjects = this.getUserProjects.bind(this);
  }



  componentWillReceiveProps(){
    this.setState({dropDownClass: 'hide',
                  results: [],
                  leftArrow: 'button-off',
                  rightArrow: 'button-off',
                  searchNavClass: 'top search-nav',
                  navLinksClass: 'bottom nav-links',
                  mainNavClass: 'no-overflow'});
  }

  componentDidMount(){
    this.props.fetchProjects();
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


  toggleSearch(){

    if (this.state.searchNavClass.slice(0,3) === 'top'){
      this.setState({ searchNavClass: 'bottom search-nav',
      navLinksClass: 'off nav-links',
      mainNavClass: 'no-overflow',
      searchClass: 'just-right'})
      const el = document.getElementById("search-bar")
      el.focus();
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
    this.props.logout()
    .then(() => hashHistory.push('/'));
  }

  getUserProjects(){
    const { projects, currentUser } = this.props;
    const keys = Object.keys(projects);
    const projectLinks = keys.map((key, idx) => {
      const project = projects[key];
      const displayLink = `/projects/${project.id}`;
      const editLink = `edit/${project.id}`
      const projectName = project.title;
      if (currentUser.id === project.user.id){
        return (
          <li key={key}><Link to={displayLink}>{projectName}</Link> 
           <Link to={editLink}>edit</Link></li>
        );
      }
    });
    return (
    <ul>{projectLinks}</ul>
    );
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
                  <h2>My projects</h2>
                    {this.getUserProjects()}
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
                    <SearchContainer props={this.props}/>
                      <i id="fred" className="material-icons">search</i>
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
                    <a href='https://www.linkedin.com/in/eversjames/'
                          className="nav-link">
                        About
                    </a>
                  </span>
                </div>
              </div>
              <div className="logo"
                onClick={this.handleTitleClick}>
                <h1 className="header-h1">
                  Quack
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
        </div>
      );
    }
  }
