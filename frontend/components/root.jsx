import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import LoginFormContainer from './session_form/login_form_container';
import ProjectIndexContainer from './projects/index/project_index_container';
import ProjectDetailContainer from './projects/detail/project_detail_container';
import ProjectFormContainer from './projects/form/project_form_container';
import SearchIndexContainer from './search/search_index_container';

const Root = ({ store }) => {

  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={App}>
          <IndexRoute component={ProjectIndexContainer}/>
          <Route path="/login" component={LoginFormContainer} onEnter={redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
          <Route path="/projects" component={ProjectIndexContainer}/>
          <Route path="/search" component={SearchIndexContainer}/>
          <Route path="/projects/new" component={ProjectFormContainer} />
          <Route path="/projects/:projectId" component={ProjectDetailContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
