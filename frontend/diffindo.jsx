import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

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

  const dashboardView = document.getElementsByClassName("main-view")[0];
  Modal.setAppElement(document.body);
  
  window.store = store;

  ReactDOM.render(<Root store={store} />, rootEl);


});
