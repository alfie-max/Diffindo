import merge from 'lodash/merge';

import {
  REQUEST_ALL_BILLS,
  REQUEST_SINGLE_BILL,
  CREATE_BILL,
  UPDATE_BILL,
  DELETE_BILL,
  receiveAllBills,
  receiveSingleBill,
  receiveErrors
} from '../actions/bills_actions'

import {
  fetchAllBills,
  fetchSingleBill,
  postBill,
  patchBill,
  deleteBill
} from '../util/bills_api_util';

const billsMiddleware = ({ dispatch }) => next => action => {


  const receiveAllBillsSuccess = (data) => dispatch(receiveAllBills(data));
  const receiveSingleBillSuccess = (data) => dispatch(receiveSingleBill(data));
  const receiveBillsErrors = (errors) => dispatch(receiveErrors(errors));

  switch (action.type) {

    case REQUEST_ALL_BILLS:
      fetchAllBills(receiveAllBillsSuccess, receiveErrors);
      return next(action);

    case REQUEST_SINGLE_BILL:
      fetchSingleBill(action.id, receiveSingleBillSuccess, receiveErrors);
      return next(action);

    case CREATE_BILL:
      postBill(action.bill, receiveSingleBillSuccess, receiveErrors);
      return next(action);

    case UPDATE_BILL:
      console.log(action);
      patchBill(action.id, action.bill, receiveSingleBillSuccess, receiveErrors);
      return next(action);

    case DELETE_BILL:
      deleteBill(action.id, receiveAllBills, receiveErrors);
      return next(action);

    default:
      return next(action);
  }
}

export default billsMiddleware;
