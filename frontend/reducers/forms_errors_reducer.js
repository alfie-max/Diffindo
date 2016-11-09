import merge from 'lodash/merge';

import {
  RECEIVE_BILLS_ERRORS
} from '../actions/bills_actions'

const _defaultState = {
  errors: []
}

const FormsErrorsReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_BILLS_ERRORS:
    console.log("Receiving errors: ", action);
      const errors = action.errors;
      return merge({}, _defaultState, {errors});

    default:
      return state;
  }
}

export default FormsErrorsReducer;
