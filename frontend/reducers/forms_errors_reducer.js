import merge from 'lodash/merge';

import {
  RECEIVE_BILLS_ERRORS
} from '../actions/bills_actions'

import {
  CLEAR_ALL_ERRORS
} from '../actions/forms_actions'

const _defaultState = {
  billErrors: []
}

const FormsErrorsReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_BILLS_ERRORS:
      const billErrors = action.errors;
      return merge({}, _defaultState, {billErrors});

    case CLEAR_ALL_ERRORS:
      return _defaultState;

    default:
      return state;
  }
}

export default FormsErrorsReducer;
