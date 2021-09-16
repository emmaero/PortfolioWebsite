import React from "react";
import reactDom from "react-dom";
import close from "../assets/icons/button-close.png";

export default function ModalContainer({ modal, setModal }) {
  //safeguard
  if (modal === null) return null;

  return reactDom.createPortal(
    <>
      <div className="modal-background">
        <div className="modal-container">
          <button className="button-close" onClick={() => setModal(null)}>
            <img src={close} alt="close" />
          </button>
          {modal}
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
