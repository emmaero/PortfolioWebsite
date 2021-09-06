import React from "react";

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
