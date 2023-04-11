import React from "react";
import "../styles/Education.css";
const Education = ({ Data }) => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {Data.education &&
            Data.education.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.Institution}</h3>
                    <p className="info">
                      {item.Study}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    <h6>{item.Percentage}</h6>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {Data.work &&
            Data.work.map((item) => {
              return (
                <div className="row item">
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Place}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="Container">
            <div className="skills">
              {Data.skills &&
                Data.skills.map((item) => {
                  return (
                    <>
                      <h3>{item.skillname}</h3>
                      <div className="progress-bar">
                        <div
                          className="html"
                          title={`${item.Percentage}%`}
                          style={{ width: `${item.Percentage}%` }}
                        >
                          <span></span>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
