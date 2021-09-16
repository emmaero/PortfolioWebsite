import React from "react";
import Pill from "./Pill";
export default function Modal({ item, setModal }) {
  const { title, imageUrl, text, pillList, websiteUrl, gitUrl } = item;
  const pills = pillList.map((item, index) => <Pill key={index} tech={item} />);
  const screenShotUrl = require("../assets/screenShots/" + imageUrl).default;
  return (
    <div className="modal-detail">
      <div className="modal-image-wrapper">
        <img src={screenShotUrl} alt="" />
      </div>
      <div className="modal-info-wrapper">
        <h2>{title}</h2>
        <p>{text}</p>
        <ul className="pill-list">{pills}</ul>
        <a href={websiteUrl} target="_blank" rel="noreferrer noopener">
          <button
            onClick={() => setModal(null)}
            className="button button-primary"
          >
            Visit website/app
          </button>
        </a>
        <a href={gitUrl} target="_blank" rel="noreferrer noopener">
          <button
            onClick={() => setModal(null)}
            className="button button-secondary"
          >
            Git repository
          </button>
        </a>
      </div>
    </div>
  );
}
