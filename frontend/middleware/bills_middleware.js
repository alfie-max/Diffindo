import merge from 'lodash/merge';

import {
  REQUEST_ALL_BILLS,
  REQUEST_SINGLE_BILL,
  CREATE_BILL,
  UPDATE_BILL,
  DELETE_BILL,
  FINISH_BILL_TRANSACTION,
  requestAllBills,
  receiveAllBills,
  receiveSingleBill,
  receiveBillsErrors,
  finishBillTransaction
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
  const getBillsErrors = (error) => dispatch(receiveBillsErrors(error.responseJSON));
  const billTransactionSuccess = (data) => dispatch(requestAllBills(data));

  switch (action.type) {

    case FINISH_BILL_TRANSACTION:
    case REQUEST_ALL_BILLS:
      fetchAllBills(receiveAllBillsSuccess, getBillsErrors);
      return next(action);

    case REQUEST_SINGLE_BILL:
      fetchSingleBill(action.id, receiveSingleBillSuccess, getBillsErrors);
      return next(action);

    case CREATE_BILL:
      postBill(action.bill, billTransactionSuccess, getBillsErrors);
      return next(action);

    case UPDATE_BILL:
      patchBill(action.id, action.bill, billTransactionSuccess, getBillsErrors);
      return next(action);

    case DELETE_BILL:
      deleteBill(action.id, billTransactionSuccess, getBillsErrors);
      return next(action);

    default:
      return next(action);
  }
}

export default billsMiddleware;
