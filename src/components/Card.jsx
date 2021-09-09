import React, { useState } from "react";
import projects from "../contents/projects.json";
import ProjectModal from "./ProjectModal";

export default function Card({ item }) {
  const [isOpen, setIsOpen] = useState(false); // a better name is toggleModal

  //This show modal
  // This can be refactor and put directly on the button
  // onClick={()=>setIsOpen(!isOpen)}
  function toggleModal() {
    setIsOpen((prevState) => {
      return !prevState;
    });
  }

  return (
    <>
      <button disabled={!item.isDone} onClick={toggleModal} className="card">
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

      {/* You are nesting the modal inside the card this is making the component too coupled. That's why i send the portals video -1 */}
      {/* This -1 is super important */}
      <ProjectModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        item={item.project}
      />
    </>
  );
}
