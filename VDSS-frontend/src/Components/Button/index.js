import React from "react";
import "./button.scss";
const Button = (props) => {
  const { className, btnText, onClick, btnIcon } = props;
  return (
    <div
      onClick={onClick}
      className={className ? `${className} button` : `button`}
    >
      {btnText ? <span className="button-text">{btnText}</span> : null}
      {btnIcon ? <span className="button-icon">{btnIcon}</span> : null}
    </div>
  );
};
export default Button;
