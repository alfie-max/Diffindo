export const addFriend = (friend, success, error) => (
  $.ajax({
    method: "POST",
    url: `api/friends`,
    data: friend,
    success,
    error
  })
)
