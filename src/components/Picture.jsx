import React from "react";
import picture from "../assets/images/profile-pic.jpg";

export default function Picture() {
  return (
    <div className="picture">
      <img src={picture} alt="" />
    </div>
  );
}
