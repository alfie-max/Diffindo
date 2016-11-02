import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';

const Root = ({store}) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    //We don't want to create a new hashHistory object, but replace the existing one
    const currentUser = store.getState().session.currentUser;
    if (currentUser) replace("/dashboard");
  }

  const redirectIfLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace("/");
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SessionFormContainer} />
          <Route path="/login" component={SessionFormContainer}
            onEnter={redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer}
            onEnter={redirectIfLoggedIn}/>
          <Route path="/dashboard" component={DashboardContainer}
            onEnter={redirectIfLoggedOut}/>
        </Route>
      </Router>
    </Provider>
);
}

export default Root;
