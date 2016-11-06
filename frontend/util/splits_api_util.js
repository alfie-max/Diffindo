export const postSplit = (split, success, error) => (
  $.ajax({
    method: "POST",
    url: `api/splits`,
    data: split,
    success,
    error
  })
)

export const patchSplit = (split, success, error) => (
  $.ajax({
    method: "PATCH",
    url: `api/splits/${split.id}`,
    data: split,
    success,
    error
  })
)

export const deleteSplit = (id, success, error) => (
  $.ajax({
    method: "DELETE",
    url: `api/splits/${id}`,
    success,
    error
  })
)
