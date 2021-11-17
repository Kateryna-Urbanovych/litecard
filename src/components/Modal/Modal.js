import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";
import { ReactComponent as CloseBtnIcon } from "../../images/close-btn-icon.svg";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} id='overlay' onClick={handleOverlayClick}>
      <div className={s.modal} id='modal'>
        <CloseBtnIcon
          width='20'
          height='20'
          className={s.closeBtnIcon}
          onClick={() => onClose()}
        />
        <span className={s.textModal}>...Improvement</span>
      </div>
    </div>,
    modalRoot
  );
};
