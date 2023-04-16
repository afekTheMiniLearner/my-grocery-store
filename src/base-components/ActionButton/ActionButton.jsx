import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ActionButton.scss';

export default function ActionButton({
  label,
  onClickHandler,
  type,
  children,
  className,
  style,
}) {
  const classes = classNames('action-button-container', className);

  return (
    <button
      className={classes}
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
  type: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  label: undefined,
  onClickHandler: undefined,
  type: 'button',
  className: '',
  style: {},
};
