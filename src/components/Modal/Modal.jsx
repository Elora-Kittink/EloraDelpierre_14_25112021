import React from "react";

const Modal = ({ isOpen, handleModalOpening }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <button onClick={handleModalOpening}>X</button>
      <p>MODALE</p>
    </div>
  );
};

export default Modal;
