import React from 'react';
import PropTypes from 'prop-types';

import './ActionButton.scss';

function ActionButton({ label, onClickHandler, classes, type, children }) {
  return (
    <button
      className={`action-button-container ${classes}`}
      onClick={(event) => {
        event.stopPropagation();
        onClickHandler?.();
      }}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {label}
      {children}
    </button>
  );
}

ActionButton.propTypes = {
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  classes: PropTypes.string,
  type: PropTypes.string,
};

ActionButton.defaultProps = {
  label: undefined,
  onClickHandler: undefined,
  classes: '',
  type: 'button',
};

export default ActionButton;
