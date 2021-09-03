import React from "react";
import { ImLinkedin } from "react-icons/im";
import {VscGithubInverted } from "react-icons/vsc";

export default function PageFooter() {
  return (
    <footer>
      <ul>
        <li><a href="https://github.com/emmaero"><VscGithubInverted/></a></li>
        <li><a href="https://www.linkedin.com/in/emmanuel-imhontu-3a84bb79/"><ImLinkedin/></a></li>
      </ul>
    </footer>
  );
}
