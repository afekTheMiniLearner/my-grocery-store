import React from 'react';
import PropTypes from 'prop-types';

import './ActionButton.scss';

function ActionButton({ label, onClickHandler, classes }) {
  return (
    <button
      className={`action-button-container ${classes}`}
      onClick={(event) => {
        event.stopPropagation();
        onClickHandler();
      }}
    >
      {label}
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  classes: PropTypes.string,
};

ActionButton.defaultProps = {
  label: undefined,
  onClickHandler: undefined,
  classes: '',
};

export default ActionButton;
