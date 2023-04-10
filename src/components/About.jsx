import React from "react";

const About = ({ Data }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{Data.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{Data.name}</span>
                <br />
                <span>{Data.address}</span>
                <br />
                <span>{Data.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
