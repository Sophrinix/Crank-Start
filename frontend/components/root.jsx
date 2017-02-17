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

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
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
          <Route path="/login" component={LoginFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/projects" component={ProjectIndexContainer}/>
          <Route path="/projects/:projectId" component={ProjectDetailContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
