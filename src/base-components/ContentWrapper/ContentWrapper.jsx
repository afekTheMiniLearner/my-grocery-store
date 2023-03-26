import React from "react";
import PropTypes from "prop-types";

import "./ContentWrapper.scss";

function ContentWrapper({ children, classes }) {
  return (
    <div className={`edit-data-container ${classes}`}>
      <h4>{label} </h4>
      <input type={type} onChange={onChangeHandler} value={inputState}></input>
    </div>
  );
}

ContentWrapper.propTypes = {
  label: PropTypes.string,
  inputState: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeHandler: PropTypes.number,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  classes: PropTypes.string,
};

ContentWrapper.defaultProps = {
  label: undefined,
  inputState: "",
  onChangeHandler: undefined,
  type: "text",
  classes: "",
};

export default ContentWrapper;
