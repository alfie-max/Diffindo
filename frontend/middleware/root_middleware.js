import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BillsMiddleware from './bills_middleware';
import FriendsMiddleware from './friends_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BillsMiddleware,
  FriendsMiddleware
);

export default RootMiddleware;
