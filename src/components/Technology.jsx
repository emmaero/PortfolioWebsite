import React from "react";

export default function Technology({ item }) {
  return (
    <div className="tech-icon-background">
      <img
        src={require("../assets/icons/technologies/" + item.iconUrl).default}
        alt=""
      />
      <span className="tech-name">{item.name}</span>
    </div>
  );
}
