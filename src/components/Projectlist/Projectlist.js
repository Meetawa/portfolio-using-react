import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import findgithubuser from "../../Assets/Find-github-user.png";
import jokesbox from "../../Assets/jokes.png";
import Moviesimage from "../../Assets/Movies-app.png";
import portfolio from "../../Assets/porfolio.png";
import color from "../../Assets/color.png";
import Spotify from "../../Assets/spotify.png";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={findgithubuser}
                isBlog={false}
                title="find-github-user"
                description="In this project we can finding github user details using github username ."
                ghLink="https://meetawa.github.io/find-github-user/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={jokesbox}
                isBlog={false}
                title="jokes-box"
                description="This project is a simplified front-end JokesBox."
                ghLink="https://meetawa.github.io/jokes-box/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Moviesimage}
                isBlog={false}
                title="movie-information-app"
                description="This project is a simplified front-end movie-information-app.This Web-App is gives the information of movies and also showing rating of movies "
                ghLink="https://meetawa.github.io/movie-information-app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Portfolio"
                description="simple personal site using html,css, javascript"
                ghLink="https://meetawa.github.io/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={color}
                isBlog={false}
                title="Color-Box"
                description="create a Color-Box App using ReactJS."
                ghLink="https://meetawa-color-box.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Spotify}
                isBlog={false}
                title="Spotify-Clone"
                description="It is clone of spotify which complete online music platform , it made by html,css and js(javascript)."
                ghLink="https://meetawa.github.io/spotify-clone/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
