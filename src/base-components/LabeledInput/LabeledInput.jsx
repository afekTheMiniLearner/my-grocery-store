import React from "react";
import PropTypes from "prop-types";

import "./LabeledInput.scss";

function LabeledInput({ label, inputState, onChangeHandler, type, classes }) {
  return (
    <div className={`input-field-container ${classes}`}>
      <h4>{label} </h4>
      <input type={type} onChange={onChangeHandler} value={inputState}></input>
    </div>
  );
}

LabeledInput.propTypes = {
  label: PropTypes.string,
  inputState: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeHandler: PropTypes.func,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.string,
};

LabeledInput.defaultProps = {
  label: undefined,
  inputState: "",
  onChangeHandler: undefined,
  type: "text",
  classes: "",
};

export default LabeledInput;
