import {
  ADD_FRIEND,
} from '../actions/friends_actions';

import { addFriend } from '../util/friends_api_util';
import { receiveAddFriendErrors } from '../actions/friends_actions';
import { receiveCurrentUser } from '../actions/session_actions';

const FriendsMiddleware = ({ dispatch }) => next => action => {

  const receiveCurrentUserSuccess = (data) => dispatch(receiveCurrentUser(data));
  const getAddFriendErrors = (error) =>
   dispatch(receiveAddFriendErrors(error.responseJSON));

  switch (action.type) {

    case ADD_FRIEND:
      addFriend(action.user, receiveCurrentUserSuccess, getAddFriendErrors);
      return next(action);

    default:
      return next(action);
  }
}

export default FriendsMiddleware;
