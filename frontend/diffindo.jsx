import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

/*TESTING*/
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl);

  /*TESTING*/
  window.u1 = {user: {username: "eric", password: "blabla", activated: true}};
  window.invalid_user_1 = {user: {username: "ericc", password: "blabla", activated: true}};
  window.invalid_user_2 = {user: {username: "eric", password: "blabl", activated: true}};
  window.success = (data) => console.log(data);
  window.error = (data) => console.log(data);
  window.logout = logout;
  window.login = login;
  window.signup = signup;
  window.store = store; ///We want the return of configureStore function, which is the createStore function.
  // window.store.dispatch(login(valid_user));
});
