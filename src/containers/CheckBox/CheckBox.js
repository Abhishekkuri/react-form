import React from "react";
const CheckBox = props => {
  return (
    <>
      <div>
        <label htmlFor={props.name}>{props.title}</label>
      </div>
      {props.options.map(option => {
        return (
          <div className="form-check form-check-inline" key={option}>
            <label className="form-group-label">
              <input
                className="form-check-input"
                id={props.name}
                name={props.name}
                onChange={props.handleChange}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="checkbox"
              />
              {option}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default CheckBox;
