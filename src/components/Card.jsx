import React, { useState } from "react";
import projects from "../contents/projects.json";
import ProjectModal from "./ProjectModal";
export default function Card({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  //This show modal
  function toggleModal() {
    setIsOpen((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      <button
        disabled={!item.isDone}
        onClick={toggleModal}
        className="card"
      >
        <div className="thumbnail">
          <img
            src={require("../assets/thumbnails/" + item.thumbnail).default}
            alt=""
          />
          {item.isDone === true ? (
            ""
          ) : (
            <div className="thumbnail-overlay">
              <span>COMMING SOON</span>
            </div>
          )}
        </div>
        <div className="title">
          <h3>{item.project.title}</h3>
        </div>
      </button>
      <ProjectModal
        open={isOpen}
        toggleModal={toggleModal}
        item={item.project}
      />
    </>
  );
}
