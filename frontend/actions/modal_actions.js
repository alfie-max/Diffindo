export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modalAction) => ({
  type: OPEN_MODAL,
  modalAction
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})
