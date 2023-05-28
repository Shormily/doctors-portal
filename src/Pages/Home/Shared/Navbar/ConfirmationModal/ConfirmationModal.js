import React from "react";

const ConfirmationModal = ({
  title,
  message,
  closeModal,
  successAction,
  modalData,
   successButtonName
}) => {
  return (
    <>
      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="confirmation-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="confirmation-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">{title}</h3>
          <p class="py-4">{message}</p>
          <div class="modal-action">
            <label
              onClick={() => successAction(modalData)}
              for="confirmation-modal-5"
              class="btn btn-outline btn-ghost btn-xs"
            >
              Confirm
            </label>
            <label
              onClick={closeModal}
              for="confirmation-modal-5"
              class=" btn btn-ghost btn-xs"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
