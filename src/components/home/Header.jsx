import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/images/main_header.png";
import { GetText } from "../../Languages/lang";

const Header = () => {
  const inMobile = window.innerWidth <= 768 ? true : false;
  return (
    <section className="hero-container">
      <div className="container hero-container-header">
        <div className="h-left">
          <h4>{GetText("hero_hastag")}</h4>
          <h1>{GetText("hero_title")}</h1>
          <p>{GetText("hero_text")}</p>
          <Link to="/plans" className="btn lg">
            {GetText("hero_link_button")}
          </Link>
        </div>
        {!inMobile ? (
          <div className="h-right">
            <div className="hero-circle"></div>
            <div className="hero-image">
              <img src={image} alt="Hero main Image" />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Header;
