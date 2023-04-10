import React from "react";
import "../styles/About.css";
const About = ({ Data }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/113601684?v=4"
            alt="Network issue"
            title="Mr.Rahul Saini"
          />
        </div>

        <div className="columns main-col">
          <h2>
            <b>About Me</b>
          </h2>
          <p>{Data.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>
                <b>Contact Details</b>
              </h2>
              <p className="address">
                <span>{Data.name}</span>
                <br />
                <span>{Data.address}</span>
                <br />
                <span>{Data.Email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
