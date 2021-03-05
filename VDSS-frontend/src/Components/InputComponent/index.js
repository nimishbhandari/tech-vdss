import React from "react";
import "./input.scss";
const InputComponent = (props) => {
  const { type, onChange, inputClass, onFocus, value } = props;

  return (
    <>
      {type === "textarea" ? (
        <textarea
          rows={4}
          cols={100}
          className={inputClass ? `input ${inputClass}` : "input"}
          onChange={onChange}
          {...props}
        >
          {value}
        </textarea>
      ) : (
        <input
          type={type || "text"}
          value={value}
          rows={type === ""}
          className={inputClass ? `input ${inputClass} ` : "input"}
          onChange={onChange}
          {...props}
        />
      )}
    </>
  );
};
export default InputComponent;
