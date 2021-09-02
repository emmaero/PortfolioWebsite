import React from "react";
import projects from "../contents/projects.json";

export default function ProjectModal() {
  const item = projects[0];
  const pills = item.project.pillList.map((item) => <li>{item}</li>);
  const screenShotUrl = require("../assets/thumbnails/" +
    item.thumbnail).default;
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <img className="modal-image" src={screenShotUrl} alt="" />

        <h2>{item.project.title}</h2>
        <div className="pills"></div>
        <button>
          <a href="'">Visit website/app</a>
        </button>
        <button>
          <a href="">Git repository</a>
        </button>
      </div>
    </div>
  );
}
