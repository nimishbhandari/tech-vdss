import React from "react";
import "./Navbar.scss";

import { useState } from "react";
import Button from "../Button";
import { useEffect } from "react";
import ScrollLink from "../ScrollLink";
import { Hamburger } from "../Icons";

function Navbar({ isOpen, setIsOpen }) {
  const [scrollState, setScrollState] = useState("top");
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    let listener = document.addEventListener("scroll", () => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 20) {
        if (scrollState !== "moved") setScrollState("moved");
      } else {
        if (scrollState !== "top") {
          setScrollState("top");
        }
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div className={scrollState === "top" ? "navbar" : "navbar top"}>
      <div className="navbar__logo">
        <div className="logo_area"></div>
        {/* <p>VDSS</p> */}
      </div>
      <div className="hamburger-icon" onClick={() => setSidebar(!sidebar)}>
        <Hamburger />
      </div>
      <div className={sidebar ? "navbar__hamburger open" : "close"}>
        <div
          className="drawer"
          anchor="right"
          open={toggleDrawer}
          onClose={() => setToggleDrawer(false)}
        >
          <div className="close-icon" onClick={() => setSidebar(false)}>
            Close
          </div>
          <ul className={`drawer-list`}>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
              <ScrollLink delay={300} className="links" to="home" offset={5}>
                Home
              </ScrollLink>
            </li>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
              <ScrollLink
                activeClass="active"
                className="links"
                to="about"
                offset={30}
                delay={300}
              >
                About Us
              </ScrollLink>
            </li>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
              <ScrollLink
                to="domains"
                activeClass="active"
                delay={300}
                offset={10}
                className="links"
              >
                Services
              </ScrollLink>
            </li>
            <li className="drawer-item" onClick={() => setToggleDrawer(false)}>
              <ScrollLink activeClass="active-class" to="footer" delay={300}>
                Contact Us
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar__nav">
        <div className="navbar__elements">
          <ScrollLink
            delay={300}
            activeClass="active"
            className="links"
            to="home"
            offset={5}
          >
            Home
          </ScrollLink>
        </div>
        <div className="navbar__elements">
          <ScrollLink
            activeClass="active"
            className="links"
            to="about"
            offset={30}
            delay={300}
          >
            About Us
          </ScrollLink>
        </div>
        <div className="navbar__elements">
          <ScrollLink
            to="domains"
            activeClass="active"
            delay={300}
            offset={10}
            className="links"
          >
            Services
          </ScrollLink>
        </div>
        <div className="navbar__elements">
          <ScrollLink
            activeClass="active"
            className="links"
            to="footer"
            offset={10}
            delay={300}
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
