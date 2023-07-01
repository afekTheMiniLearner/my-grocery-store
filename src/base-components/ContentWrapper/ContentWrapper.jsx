import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ContentWrapper.scss';

export default function ContentWrapper({
  children,
  className,
  onClick,
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
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

ContentWrapper.defaultProps = {
  className: '',
  onClick: undefined,
  style: {},
};
