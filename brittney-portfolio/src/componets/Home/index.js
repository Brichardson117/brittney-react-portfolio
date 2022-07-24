import React from "react";
import aboutImage from "../../assets/me/selfie.JPG";
import "../../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Home() {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <section className="about-me">
          <h2 className="uk-text-center uk-panel">About Me</h2>
          <Col>
            <img
              className="uk-align-left uk-margin-remove-adjacen about-me-img"
              src={aboutImage}
              alt="me"
              style={{ height: "300px", width: "300px" }}
            />
          </Col>
          <Col>
            <p className="uk-text-large me-body">
              Hello! My name is Brittney, a Full Stack Web Developer with a
              certificate from Rice Coding Bootcamp, newly acquired skills for
              Frontend and Backend Web Development. Very well known for amazing
              soft skills, incredible work ethic, and desire to learn and grow.
              I aim to give users the best experience using web pages I worked
              on developing across all devices. I am looking forward to taking
              my skills and applying them to a wonderful and hard-working team
              to grow and enhance the experience that users have online.
            </p>
          </Col>
        </section>
      </Row>
    </Container>
  );
}
