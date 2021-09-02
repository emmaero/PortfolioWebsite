import React from "react";
import projects from "../contents/projects.json";
export default function Card({ item }) {
  return (
    <button className="card">
      <div className="thumbnail">
        <img
          src={require("../assets/thumbnails/" + item.thumbnail).default}
          alt=""
        />
        {item.isDone === "true" ? (
          ""
        ) : (
          <div className="thumbnail-overlay">
            <span>COMMING SOON</span>
          </div>
        )}
      </div>
      <div className="title">
        <h3>{projects[1].project.title}</h3>
      </div>
    </button>
  );
}
