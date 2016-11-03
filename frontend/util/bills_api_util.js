export const fetchAllBills = (success, error) => (
  $.ajax({
    method: "GET",
    url: "api/bills",
    success,
    error
  })
)

export const fetchSingleBill = (id, success, error) => (
  $.ajax({
    method: "GET",
    url: `api/bills/${id}`,
    success,
    error
  })
)

export const postBill = (bill, success, error) => (
  $.ajax({
    method: "POST",
    url: `api/bills`,
    data: bill,
    success,
    error
  })
)

export const patchBill = (id, bill, success, error) => (
  $.ajax({
    method: "PATCH",
    url: `api/bills/${id}`,
    data: bill,
    success,
    error
  })
)

export const deleteBill = (id, success, error) => (
  $.ajax({
    method: "DELETE",
    url: `api/bills/${id}`,
    success,
    error
  })
)
