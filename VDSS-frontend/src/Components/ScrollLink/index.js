import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const ScrollLink = (props) => {
  return (
    <Link smooth activeClass={props.activeClass} spy {...props}>
      {props.children}
    </Link>
  );
};

export default ScrollLink;
