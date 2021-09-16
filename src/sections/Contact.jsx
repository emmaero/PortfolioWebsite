import React from "react";
import { IoMdMail } from "react-icons/io";
import { ImLocation, ImPhone } from "react-icons/im";
// project files
import sectionInfo from "../contents/section.json";

export default function Contact() {
  return (
    <section className="section-layout-container" id="contacts">
      <div className="section-layout">
        <h2>{sectionInfo.contact.title}</h2>
        <div className="section-description">
          <p>{sectionInfo.contact.description}</p>
        </div>
        <div className="section-content">
          <ul className="contact">
            <li>
              <IoMdMail />
              <a>imhontu.emmanuel@yahoo.com</a>
            </li>
            <li>
              <ImPhone />
              <a href="tel:+46709641118">+46709641118</a>
            </li>
            <li>
              <ImLocation />
              <a href="">Halmstad, Sweden</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
