import merge from 'lodash/merge';

import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions'

import {
  FINISH_BILL_TRANSACTION,
  RECEIVE_BILLS_ERRORS
} from '../actions/bills_actions'

const _defaultState = {
  billModal: false,
  modalAction: ""
}

const ModalsReducer = (state=_defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {

    case FINISH_BILL_TRANSACTION:
    case CLOSE_MODAL:
      return merge({}, state, {billModal: false});

    case RECEIVE_BILLS_ERRORS:
    case OPEN_MODAL:
      return {billModal: true, modalAction: action.modalAction};

    default:
      return state;
  }
}

export default ModalsReducer;
