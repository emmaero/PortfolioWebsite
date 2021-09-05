import React from "react";
import reactDom from "react-dom";
import Pill from "./Pill";
import close from "../assets/icons/button-close.png";

export default function ProjectModal({ isOpen, toggleModal, item }) {
  const { title, imageUrl, text, pillList, websiteUrl, gitUrl } = item;
  if (!isOpen) return null;

  const pills = pillList.map((item, index) => <Pill key={index} tech={item} />);
  const screenShotUrl = require("../assets/screenShots/" + imageUrl).default;
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
            <h2 className="modal-title">{title}</h2>
            <p className="modal-description">{text}</p>
            <ul className="pill-list">{pills}</ul>
            <button className="button-main button-primary">
              <a href={websiteUrl}>Visit website/app</a>
            </button>
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
