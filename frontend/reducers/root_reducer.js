import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BillsReducer from './bills_reducer';
import BillDetailReducer from './bill_detail_reducer';
import FormsErrorsReducer from './forms_errors_reducer';
import ModalsReducer from './modals_reducer';
import { LOGOUT } from '../actions/session_actions'

const AppReducer = combineReducers({
  session: SessionReducer,
  bills: BillsReducer,
  billDetail: BillDetailReducer,
  formsErrors: FormsErrorsReducer,
  modalStatus: ModalsReducer
});


const RootReducer = (state, action) => {
  //When a reducer receives an undefined state, no matter the action, it returns the initial state
  //If issues with router, check second answer from:
  //http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
  if (action.type === LOGOUT) state = undefined
  return AppReducer(state, action);
};

export default RootReducer;
