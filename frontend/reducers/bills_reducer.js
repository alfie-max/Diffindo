import merge from 'lodash/merge';

import {
  RECEIVE_ALL_BILLS,
  RECEIVE_SINGLE_BILL,
  RECEIVE_ERRORS
} from '../actions/bills_actions'

const billsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_ALL_BILLS:
      return merge({}, state, action.bills);

    case RECEIVE_SINGLE_BILL:
      return merge({}, state, {[action.bill.id]: action.bill});

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});

    default:
      return state;
  }
}

export default billsReducer;
