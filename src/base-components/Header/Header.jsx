import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import Title from '../Title/Title';

export default function Header({ title, children }) {
  return (
    <div className="header-container">
      <Title title={title} />
      <div className="header-children-container">{children}</div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'untitled',
};
