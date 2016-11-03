import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BillsMiddleware from './bills_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BillsMiddleware
);

export default RootMiddleware;
