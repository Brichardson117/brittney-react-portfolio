import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../../App.css";

export default function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Container>
        <nav>
          <h1>Brittney Portfolio</h1>
          <ul>
            <Button variant="info">
              <li onClick={() => handlePageChange("Home")}>Home</li>
            </Button>
            <Button variant="info">
              <li onClick={() => handlePageChange("Projects")}>Projects</li>
            </Button>
            <Button variant="info">
              <li onClick={() => handlePageChange("Resume")}>
                Resume and Skills
              </li>
            </Button>
          </ul>
        </nav>
      </Container>
    </>
  );
}
