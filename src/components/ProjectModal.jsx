import React from "react";
import reactDom from "react-dom";
import Pill from "./Pill";
import close from "../assets/icons/button-close.png";

export default function ProjectModal({ isOpen, toggleModal, item }) {
  const { title, imageUrl, text, pillList, websiteUrl, gitUrl } = item;
  if (!isOpen) return null;

  const pills = pillList.map((item, index) => <Pill key={index} tech={item} />);
  const screenShotUrl = require("../assets/screenShots/" + imageUrl).default;

  // You don't need to call everything modal-something. If you use scoping in CSS this can be refactor.
  return reactDom.createPortal(
    <div className="modal">
      <div className="modal-wrapper">
        <button className="button-close" onClick={toggleModal}>
          <img src={close} alt="" />
        </button>
        <div className="modal-detail">
          <div className="modal-image-wrapper">
            <img src={screenShotUrl} alt="" />
          </div>
          <div className="modal-info-wrapper">
            {/* This h2 does not need a css class, you can style the H2 of the modal direclty using CSS scoping */}
            <h2 className="modal-title">{title}</h2>
            {/* Same here */}
            <p className="modal-description">{text}</p>
            <ul className="pill-list">{pills}</ul>
            {/* This actually needs the css class */}
            <button className="button-main button-primary">
              <a href={websiteUrl}>Visit website/app</a>
            </button>
            {/* Button main and then secondary does not make sense readability -1 it should be button and button-secondary */}
            <button className="button-main button-secondary">
              <a href={gitUrl}>Git repository</a>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
