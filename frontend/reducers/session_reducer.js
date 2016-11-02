import {hashHistory} from 'react-router';
import merge from 'lodash/merge';

import {
  LOGOUT,
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../actions/session_actions.js'

const _defaultState = {
  currentUser: null,
  errors: []
}

//How you got here: through a next(action) from the MW after someone dispatched an action.

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state); //For security reasons, as we don't want to change state
  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      // If I'm receiveing currentUser, I don't care about past state's errors, so I'll just merge the new currentUser with the _defaultState
      // hashHistory.push("/dashboard");
      return merge({}, _defaultState, {currentUser});

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _defaultState, {errors});

    case LOGOUT:
      hashHistory.push("/");
      return _defaultState;

    case CLEAR_ERRORS:
      if (state.errors.length > 0) {
        let newState = merge({}, state);
        newState.errors = [];
        return newState;
      };

    default:
      return state;
  }
}

export default SessionReducer;
