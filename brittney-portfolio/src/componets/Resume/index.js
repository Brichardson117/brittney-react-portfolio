import React from "react";
import Button from "@mui/material/Button";
import Portfolio from "../../assets/downloads/Portfolio.pdf";

function Resume() {
  return (
    <>
    <h2>Resume and Skills </h2>
      <div className="uk-column-1-2 ">
        <ol>
          <strong>Front End Skills</strong>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>BootStrap</li>
          <li>UIkit</li>
          <li>React.js</li>
          <li>React-BootStrap</li>
          <li>MUI</li>
          <li>Stripe</li>
        </ol>
        <ol>
          <strong>Backend End Skills</strong>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>GraphQL</li>
        </ol>
      </div>
      <section>
        <h3>Click the button bellow do download my Resume</h3>
        <a className="portfolio" download href={Portfolio}>
          <Button color="secondary" variant="contained">
            Download
          </Button>
        </a>
      </section>
    </>
  );
}

export default Resume;
