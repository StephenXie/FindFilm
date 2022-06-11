import React from 'react';
import { useState } from 'react';
const Modal = ({ onClose }) => {
  return (
    <div className=" modal-box fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50">
      <form className="add-form bg-white bg-opacity-100 relative w-full" onSubmit={onSubmit}>
        <button
          className="font-bold text-lg text-red-600 absolute top-[-5%] right-0"
          onClick={onClose}
        >
          ╳
        </button>
      </form>
    </div>
  );
};

export default Modal;
