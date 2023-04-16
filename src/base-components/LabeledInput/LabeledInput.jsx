import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LabeledInput.scss';

export default function LabeledInput({
  label,
  value,
  placeholder,
  onChangeHandler,
  type,
  className,
}) {
  const classes = classNames('labeled-input-container', className);

  return (
    <div className={classes}>
      <h4>{label} </h4>
      <div className="input-container">
        <input
          type={type}
          onChange={onChangeHandler}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
}

LabeledInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChangeHandler: PropTypes.func,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};

LabeledInput.defaultProps = {
  label: undefined,
  value: '',
  placeholder: '',
  onChangeHandler: undefined,
  type: 'text',
  className: '',
};
