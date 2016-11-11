import merge from 'lodash/merge';

import {
  ADD_FRIEND
} from '../actions/friends_actions.js'

const _defaultState = {
}

const FriendsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _defaultState, {currentUser});

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _defaultState, {errors});

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

export default FriendsReducer;
