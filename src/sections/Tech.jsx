import React from "react";
// project files
import sectionInfo from "../contents/section.json";
import technologies from "../contents/technologies.json";
import List from "../components/List";
import Technology from "../components/Technology";

export default function Tech() {
  //Maximum number of technology allow in technologies
  const filterTechnologies = technologies.slice(0, 15);
  return (
    <section className="section-layout-container" id="tech">
      <div className="section-layout">
        <h2>{sectionInfo.tech.title}</h2>
        <div className="section-description">
          <p>{sectionInfo.tech.description}</p>
        </div>
        <div className="section-content">
          <List list={filterTechnologies} LayoutComponent={Technology} />
        </div>
      </div>
    </section>
  );
}
