import React from "react";

// You are passing 4 arguments to this function. You can group title and text in a object -1
export default function SectionLayout({ id, title, text, children }) {
  return (
    <section className="section-layout-container" id={id}>
      <div className="section-layout">
        <h2>{title}</h2>
        <p className="section-description">{text}</p>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}
