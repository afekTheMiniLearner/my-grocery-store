import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ActionButton.scss';

export default function ActionButton({
  label,
  onClickHandler,
  classes,
  type,
  children,
  style,
}) {
  const classesList = classNames('action-button-container', classes);

  return (
    <button
      className={classesList}
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
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  label: undefined,
  onClickHandler: undefined,
  classes: '',
  type: 'button',
  style: {},
};
