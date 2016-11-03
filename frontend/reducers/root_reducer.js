import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BillsReducer from './bills_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  bills: BillsReducer
});

export default RootReducer;
