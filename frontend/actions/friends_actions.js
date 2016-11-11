export const ADD_FRIEND = "ADD_FRIEND";
export const RECEIVE_ADD_FRIENDS_ERRORS = "RECEIVE_ADD_FRIENDS_ERRORS";

export const addFriend = (user) => ({
  type: ADD_FRIEND,
  user
})

//errors is an array
export const receiveAddFriendErrors = (errors) => ({
  type: RECEIVE_ADD_FRIENDS_ERRORS,
  errors
})
