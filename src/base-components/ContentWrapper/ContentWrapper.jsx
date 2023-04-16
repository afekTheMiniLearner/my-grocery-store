import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ContentWrapper.scss';

export default function ContentWrapper({ children, onClick, classes, style }) {
  const classesList = classNames('content-wrapper', classes);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={classesList}
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
