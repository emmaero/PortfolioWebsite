import React from "react";
import reactDom from "react-dom";
import Pill from "./Pill";
import close from "../assets/icons/button-close.png";

export default function ProjectModal({ open, toggleModal, item }) {
  const { title, imageUrl, text, pillList, websiteUrl, gitUrl } = item;
  if (!open) return null;
  // get the first 15 pills
  const filtered = pillList.slice(0, 15);
  const pills = filtered.map((item, index) => <Pill key={index} tech={item} />);
  const screenShotUrl = require("../assets/screenShots/" + imageUrl).default;
  return reactDom.createPortal(
    <div className="modal">
      <button className="button-close" onClick={toggleModal}>
        <img src={close} alt="" />
      </button>
      <div className="modal-wrapper">
        <img src={screenShotUrl} alt="" />

        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{text}</p>
        <ul className="pill-list">{pills}</ul>
        <div className="modal-buttons-wrapper">
          <button className="button-main button-primary">
            <a href={websiteUrl}>Visit website/app</a>
          </button>
          <button className="button-main button-secondary">
            <a href={gitUrl}>Git repository</a>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
