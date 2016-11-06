export const CREATE_SPLIT = "CREATE_SPLIT";
export const UPDATE_SPLIT = "UPDATE_SPLIT";
export const DELETE_SPLIT = "DELETE_SPLIT";

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const createSplit = split => ({
  type: CREATE_SPLIT,
  split
})

export const updateSplit = split => ({
  type: UPDATE_SPLIT,
  split
})

export const deleteSplit = id => ({
  type: DELETE_SPLIT,
  id
})

//errors is an array
export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})
