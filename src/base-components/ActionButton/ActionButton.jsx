import React from 'react';
import PropTypes from 'prop-types';

import './ActionButton.scss';

export default function ActionButton({
  label,
  onClickHandler,
  classes,
  type,
  children,
  style,
}) {
  return (
    <button
      className={`action-button-container ${classes}`}
      onClick={(event) => {
        event.stopPropagation();
        onClickHandler?.();
      }}
      // eslint-disable-next-line react/button-has-type
      type={type}
      style={style}
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
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  label: undefined,
  onClickHandler: undefined,
  classes: '',
  type: 'button',
  style: {},
};
