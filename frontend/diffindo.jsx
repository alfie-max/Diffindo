import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

/*TESTING*/
// import { signup, login, logout } from './util/session_api_util';
// import { signup, login, logout } from './actions/session_actions';
import { signup, login, logout } from './actions/session_actions';
import { requestAllBills, createBill, updateBill, deleteBill } from './actions/bills_actions';


document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  let store;

  //We need this to keep the user logged in, even if they refresh the page (user bootstraping)
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  };

  ReactDOM.render(<Root store={store} />, rootEl);

  /*TESTING*/
  window.u1 = {user: {username: "eric", password: "blabla", activated: true}};
  window.b1 = {bill: {id: 5, title: "3rd bill", amount: 98.76, category_id: 1, author_id: 3, payer_id: 5, date: "Thu, 03 Nov 2016", split_type: "even" }}
  window.invalid_user_1 = {user: {username: "ericc", password: "blabla", activated: true}};
  window.invalid_user_2 = {user: {username: "eric", password: "blabl", activated: true}};
  window.success = (data) => console.log(data);
  window.error = (data) => console.log(data);
  window.logout = logout;
  window.login = login;
  window.signup = signup;
  window.requestAllBills = requestAllBills;
  window.createBill = createBill;
  window.updateBill = updateBill;
  window.deleteBill = deleteBill;
  window.store = store; ///We want the return of configureStore function, which is the createStore function.
  // window.store.dispatch(login(valid_user));
});
