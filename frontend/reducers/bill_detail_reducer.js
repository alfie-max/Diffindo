import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_BILL,
  RECEIVE_ERRORS
} from '../actions/bills_actions'

const _defaultState = {
  title:"",
  amount:"",
  category_id: "",
  author_id: "",
  payer_id: "",
  date: "",
  docUrl: "",
  split_type: "",
  splits_attributes: []
}

const BillDetailReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_SINGLE_BILL:
      return merge({}, action.bill);

    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});

    default:
      return state;
  }
}

export default BillDetailReducer;
