import React from 'react';
import PropTypes from 'prop-types';

import './LabeledInput.scss';

export default function LabeledInput({
  label,
  value,
  placeholder,
  onChangeHandler,
  type,
  classes,
}) {
  return (
    <div className={`labeled-input-container ${classes}`}>
      <h4>{label} </h4>
      <div className="input-container">
        {value !== undefined ? (
          <input
            type={type}
            onChange={onChangeHandler}
            placeholder={placeholder}
            value={value}
          />
        ) : (
          <input
            type={type}
            onChange={onChangeHandler}
            placeholder={placeholder}
          />
        )}
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
  classes: PropTypes.string,
};

LabeledInput.defaultProps = {
  label: undefined,
  value: undefined,
  placeholder: '',
  onChangeHandler: undefined,
  type: 'text',
  classes: '',
};
