import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import ListFriendsContainer from './friends/list_friends_container';
import { requestAllBills } from '../actions/bills_actions';

const Root = ({store}) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    //We don't want to create a new hashHistory object, but replace the existing one
    const currentUser = store.getState().session.currentUser;
    if (currentUser) replace("/");
  }

  const handleEnterDashboard = (nextState, replace) => {
    redirectIfLoggedOut(nextState, replace);
    displayAllBills();
  }

  const redirectIfLoggedOut = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser){
      replace("/login");
    }
  }

  const displayAllBills = () => store.dispatch(requestAllBills());

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={DashboardContainer} onEnter={handleEnterDashboard}/>
          <Route path="/login" component={SessionFormContainer}
            onEnter={redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer}
            onEnter={redirectIfLoggedIn}/>
          <Route path="/friends" component={ListFriendsContainer}/>
        </Route>
      </Router>
    </Provider>
);
}

export default Root;
