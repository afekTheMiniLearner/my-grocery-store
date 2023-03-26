import React from 'react';
import PropTypes from 'prop-types';

import './ContentWrapper.scss';

function ContentWrapper({ children, onClick, classes }) {
  return (
    <div className={`content-wrapper ${classes}`} onClick={onClick}>
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
