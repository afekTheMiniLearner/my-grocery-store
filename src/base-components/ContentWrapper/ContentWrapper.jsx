import React from 'react';
import PropTypes from 'prop-types';

import './ContentWrapper.scss';

function ContentWrapper({ children, onClick, classes }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={`content-wrapper ${classes}`}
      onClick={onClick}
      onKeyDown={onClick}
    >
      {children}
    </div>
  );
}

ContentWrapper.propTypes = {
  onClick: PropTypes.func,
  classes: PropTypes.string,
};

ContentWrapper.defaultProps = {
  onClick: undefined,
  classes: '',
};

export default ContentWrapper;
