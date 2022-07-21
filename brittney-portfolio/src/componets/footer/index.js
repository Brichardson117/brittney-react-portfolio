import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer className="mui-container mui--text-center">
      <div className=""> 
      <br />
      <h2> Contact Me </h2>
      <ul>
        <li> <a href="https://github.com/Brichardson117" target='_blank' uk-icon='github'/></li>
        <li> <a href="https://www.linkedin.com/in/brittneyrichardson/" target='_blank' uk-icon='linkedin'/></li>
        <li> <a href="mailto: brittneyrichardson8@gmail.com" target='_blank' uk-icon='mail'/></li>
        <li> <a href="tel: 8326124653" target='_blank' uk-icon='phone'/></li>
      </ul>
     </div> 
    </footer>
  );
}

export default Footer;
