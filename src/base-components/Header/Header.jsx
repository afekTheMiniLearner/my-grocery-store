import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";
import Title from "../Title/Title";

function Header({ title, children }) {
  return (
    <div className="header-container">
      <Title title={title} />
      {children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "untitled",
};

export default Header;
