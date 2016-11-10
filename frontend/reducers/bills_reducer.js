import merge from 'lodash/merge';

import {
  RECEIVE_ALL_BILLS,
  FINISH_BILL_TRANSACTION
} from '../actions/bills_actions'

const billsReducer = (state={}, action) => {
  Object.freeze(state);
  switch (action.type) {

    case FINISH_BILL_TRANSACTION:
    case RECEIVE_ALL_BILLS:
      return action.bills;

    default:
      return state;
  }
}

export default billsReducer;
