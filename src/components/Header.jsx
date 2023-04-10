import React from "react";
import "../styles/Header.css";
const Header = ({ Data }) => {
  return (
    <>
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {Data.name}.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              I am a {Data.role}.{Data.roleDescription}
            </h3>
            <hr />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
