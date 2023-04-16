import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ContentWrapper.scss';

export default function ContentWrapper({
  children,
  onClick,
  className,
  style,
}) {
  const classes = classNames('content-wrapper', className);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classes}
      onClick={onClick}
      onKeyDown={onClick}
      style={style}
    >
      {children}
    </div>
  );
}

ContentWrapper.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

ContentWrapper.defaultProps = {
  onClick: undefined,
  className: '',
  style: {},
};
