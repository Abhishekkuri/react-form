import React from "react";
const Input = props => {
  return (
    <>
      <div className="form-group">
        <label className="form-label" htmlFor={props.name}>
          {props.title}
        </label>
        <input
          type={props.type}
          className="form-input"
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
      </div>
    </>
  );
};

export default Input;
