import React from "react";
import "../css/Style.css";
import myImage from "../assets/images/rahul.jpg";

const Header = ({ Data }) => {
  const imageUrl = `url(${myImage})`;

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              <a className="colorlib-logo" href="index.html">
                <span
                  className="logo-img"
                  style={{ backgroundImage: imageUrl }}
                ></span>
                {Data.name}
              </a>
            </div>
            <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle">
              <i></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
