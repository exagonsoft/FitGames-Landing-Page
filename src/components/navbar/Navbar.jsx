import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../Assets/images/fglogo.png";
import { links } from "../../Data/data";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { GetText } from "../../Languages/lang";
import LangSelector from "../LanguageSelector/LangSelector";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const ScreenWith = window.innerWidth;

  const toggleNAvMenu = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={() => {setIsActive(false)}}>
          <img src={Logo} alt="Nav Logo" style={{width:"180px"}}/>
        </Link>
        {ScreenWith < 1024 ? (
          <>
            {isActive ? (
              <ul className="nav-links" onClick={toggleNAvMenu}>
                {links.map(({ name, path }, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={path}
                        className={({ isActive }) =>
                          isActive ? "nav-link-active" : ""
                        }
                      >
                        {GetText(name)}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <></>
            )}
          </>
        ) : (
          <ul className="nav-links">
            {links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav-link-active" : ""
                    }
                  >
                    {GetText(name)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}

        <button onClick={toggleNAvMenu} className="nav-bar-toggle-btn">
          {!isActive ? <FaBars /> : <MdOutlineClose />}
        </button>
        
      </div>
      <LangSelector />
    </nav>
  );
};

export default Navbar;
