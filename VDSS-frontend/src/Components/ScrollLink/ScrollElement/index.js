import React from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const ScrollElement = (props) => {
  return <Element name={props.name}>{props.children}</Element>;
};

export default ScrollElement;
