import React from "react";

const Modal = ({ isOpen, handleModalOpening }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex-modal">
      <div className="modal">
        <button onClick={handleModalOpening}>X</button>
        <p>MODALE</p>
      </div>
    </div>
  );
};

export default Modal;
