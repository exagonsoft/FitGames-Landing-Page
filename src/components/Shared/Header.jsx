import React from "react";

const Header = (props) => {
  const { title, image, children } = props;
  return (
    <header className="header">
        <div className="header-container">
            <div className="header-container-bg">
                <img src={image} alt="Header BG Image" />
            </div>
            <div className="header-content">
                <h2>{title}</h2>
                <>{children}</>
            </div>
        </div>
    </header>
  );
};

export default Header;
