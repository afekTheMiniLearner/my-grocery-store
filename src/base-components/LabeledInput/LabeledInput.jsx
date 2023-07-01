import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LabeledInput.scss';

export default function LabeledInput({
  className,
  label,
  onChangeHandler,
  placeholder,
  type,
  value,
}) {
  const classes = classNames('labeled-input-container', className);

  return (
    <div className={classes}>
      <h4>{label} </h4>
      <div className="input-container">
        <input
          onChange={onChangeHandler}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>
    </div>
  );
}

LabeledInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChangeHandler: PropTypes.func,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LabeledInput.defaultProps = {
  className: '',
  label: undefined,
  onChangeHandler: undefined,
  placeholder: '',
  type: 'text',
  value: '',
};
