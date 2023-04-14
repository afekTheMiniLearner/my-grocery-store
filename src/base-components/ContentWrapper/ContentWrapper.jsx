import React from 'react';
import PropTypes from 'prop-types';

import './ContentWrapper.scss';

export default function ContentWrapper({ children, onClick, classes, style }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`content-wrapper ${classes}`}
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
  classes: PropTypes.string,
  style: PropTypes.object,
};

ContentWrapper.defaultProps = {
  onClick: undefined,
  classes: '',
  style: {},
};
