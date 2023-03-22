import React from "react";
import PropTypes from "prop-types";

function renameMe({ prop }) {
  return (
    <div className="rename-container">
      hello im : {prop} from israel, live in england now
    </div>
  );
}

renameMe.propTypes = {
  prop: PropTypes.string,
};

renameMe.defaultProps = {
  prop: "miguel",
};

export default renameMe;
