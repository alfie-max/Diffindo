export const REQUEST_ALL_BILLS = "REQUEST_ALL_BILLS";
export const RECEIVE_ALL_BILLS = "RECEIVE_ALL_BILLS";
export const REQUEST_SINGLE_BILL = "REQUEST_SINGLE_BILL";
export const RECEIVE_SINGLE_BILL = "RECEIVE_SINGLE_BILL";
export const CREATE_BILL = "CREATE_BILL";
export const UPDATE_BILL = "UPDATE_BILL";
export const DELETE_BILL = "DELETE_BILL";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

//user is an object coming from the login form
export const requestAllBills = () => ({
  type: REQUEST_ALL_BILLS
})

export const receiveAllBills = bills => ({
  type: RECEIVE_ALL_BILLS,
  bills
})

export const requestSingleBill = id => ({
  type: REQUEST_SINGLE_BILL,
  id
})

export const receiveSingleBill = bill => ({
  type: RECEIVE_SINGLE_BILL,
  bill
})

export const createBill = bill => ({
  type: CREATE_BILL,
  bill
})

export const updateBill = bill => ({
  type: UPDATE_BILL,
  id: bill.bill.id,
  bill
})

export const deleteBill = id => ({
  type: DELETE_BILL,
  id
})

//errors is an array
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})
