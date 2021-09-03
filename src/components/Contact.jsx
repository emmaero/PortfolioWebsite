import React from "react";
import { IoMdMail } from "react-icons/io";
import { ImLocation, ImPhone, ImLinkedin } from "react-icons/im";
import PageFooter from "./PageFooter";

export default function Contact() {
  return (
    <>
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
    </>
  );
}
