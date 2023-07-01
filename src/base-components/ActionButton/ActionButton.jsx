import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ActionButton.scss';

export default function ActionButton({
  children,
  className,
  label,
  onClickHandler,
  style,
  type,
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
      style={style}
      type={type}
    >
      {label}
      {children}
    </button>
  );
}

ActionButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
};

ActionButton.defaultProps = {
  className: '',
  label: undefined,
  onClickHandler: undefined,
  style: {},
  type: 'button',
};
