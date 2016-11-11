import merge from 'lodash/merge';

import {
  RECEIVE_BILLS_ERRORS
} from '../actions/bills_actions'

import {
  RECEIVE_ADD_FRIENDS_ERRORS
} from '../actions/friends_actions'

import {
  CLEAR_ALL_ERRORS
} from '../actions/forms_actions'

const _defaultState = {
  billErrors: [],
  addFriendErrors: []
}

const FormsErrorsReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_BILLS_ERRORS:
      const billErrors = action.errors;
      return merge({}, _defaultState, {billErrors});

    case RECEIVE_ADD_FRIENDS_ERRORS:
      const addFriendErrors = action.errors;
      return merge({}, _defaultState, {addFriendErrors});

    case CLEAR_ALL_ERRORS:
      return _defaultState;

    default:
      return state;
  }
}

export default FormsErrorsReducer;
