import merge from 'lodash/merge';

import {
  RECEIVE_BILLS_ERRORS
} from '../actions/bills_actions'

const _defaultState = {
  billErrors: []
}

const FormsErrorsReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_BILLS_ERRORS:
    console.log("Receiving errors: ", action);
      const billErrors = action.errors;
      return merge({}, _defaultState, {billErrors});

    default:
      return state;
  }
}

export default FormsErrorsReducer;
