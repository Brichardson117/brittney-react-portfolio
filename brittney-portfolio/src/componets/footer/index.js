import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <h2> Contact Me </h2>
      <ul>
        <li>
          {" "}
          <a
            href="https://github.com/Brichardson117"
            target="_blank"
            rel="noopener noreferrer"
            uk-icon="icon: github; ratio: 2"
          />
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/brittneyrichardson/"
            target="_blank"
            rel="noopener noreferrer"
            uk-icon="icon: linkedin; ratio: 2"
          />
        </li>
        <li>
          {" "}
          <a
            href="mailto: brittneyrichardson8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            uk-icon="icon: mail; ratio: 2"
          />
        </li>
        <li>
          {" "}
          <a
            href="tel: 8326124653"
            target="_blank"
            rel="noopener noreferrer"
            uk-icon="icon: phone; ratio: 2"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
