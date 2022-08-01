import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../../App.css";

export default function NavTabs() {
  return (
    <>
      <Container>
        <nav>
          <h1>Brittney Portfolio</h1>
          <ul>
            <Link to="/">
              <Button variant="outline-primary">
                <li>Home</li>
              </Button>
            </Link>

            <Link to="/projects">
              <Button variant="outline-primary">
                <li>Projects</li>
              </Button>
            </Link>

            <Link to="/resume">
              <Button variant="outline-primary">
                <li>Resume and Skills</li>
              </Button>
            </Link>
          </ul>
        </nav>
      </Container>
    </>
  );
}
