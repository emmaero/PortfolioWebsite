import React from "react";

export default function SectionLayout({ id,title, text, children }) {
  return (
    <section className="section-layout" id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="section-content">{children}</div>
    </section>
  );
}
