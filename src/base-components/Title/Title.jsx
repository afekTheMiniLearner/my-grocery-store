import React from "react";
import PropTypes from "prop-types";

import "./Title.scss";

function Title({ title }) {
  return <h2 className="title">{title} </h2>;
}

Title.propTypes = {
  title: PropTypes.string,
};

Title.defaultProps = {
  title: "untitled",
};

export default Title;
