import merge from 'lodash/merge';

import {
  REQUEST_ALL_BILLS,
  REQUEST_SINGLE_BILL,
  CREATE_BILL,
  UPDATE_BILL,
  DELETE_BILL,
  requestAllBills,
  receiveAllBills,
  receiveSingleBill,
  receiveBillsErrors
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
  const getBillsErrors = (error) => dispatch(receiveBillsErrors(error);
  const updateBillsState = () => dispatch(requestAllBills());

  switch (action.type) {

    case REQUEST_ALL_BILLS:
      fetchAllBills(receiveAllBillsSuccess, getBillsErrors);
      return next(action);

    case REQUEST_SINGLE_BILL:
      fetchSingleBill(action.id, receiveSingleBillSuccess, getBillsErrors);
      return next(action);

    case CREATE_BILL:
      postBill(action.bill, updateBillsState, getBillsErrors);
      return next(action);

    case UPDATE_BILL:
      patchBill(action.id, action.bill, updateBillsState, getBillsErrors);
      return next(action);

    case DELETE_BILL:
      deleteBill(action.id, updateBillsState, getBillsErrors);
      return next(action);

    default:
      return next(action);
  }
}

export default billsMiddleware;
