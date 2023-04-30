import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              I am a Frontend Developer.I like dabbling in various parts of
              frontend development,Strong engineering professional with a
              Bachelor's Degree focused in Computer Science and Technology from
              B.K. Birla Institute of Engineering & Technology,pilani and like
              to learn about new technologies A responsive design makes your
              website accessible to all users, regardless of their devices.
            </p>
            <ul className="skilllist">
              <Row>
                <h3>Skills</h3>
                <Col md={7}>
                  <li>C/C++/C#</li>
                  <li>OOPs</li>
                  <li>DSA</li>
                </Col>
                <Col md={5}>
                  <li>HTML5/CSS3</li>
                  <li>javaScript/TypeScript</li>
                  <li>React Js</li>
                  <li>Node Js</li>
                  <li>Git/Github</li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
