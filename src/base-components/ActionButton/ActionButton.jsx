import React from 'react';
import PropTypes from 'prop-types';

import './ActionButton.scss';

function ActionButton({ id, label, onClickHandler, classes }) {
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
  id: PropTypes.string,
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  classes: PropTypes.string,
};

ActionButton.defaultProps = {
  id: undefined,
  label: undefined,
  onClickHandler: undefined,
  classes: '',
};

export default ActionButton;
