import React from "react";
// project files
import sectionInfo from "../contents/section.json";
import picture from "../assets/images/about-pic.jpeg";

export default function About() {
  const description = sectionInfo.about.description.map((item, index) => (
    <p key={index}>{item}</p>
  ));
  return (
    <section className="section-layout-container" id="about">
      <div className="section-layout">
        <h2>{sectionInfo.about.title}</h2>
        <div className="section-description">{description}</div>
        <div className="section-content">
          <div className="picture">
            <img src={picture} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
