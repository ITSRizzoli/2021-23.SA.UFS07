import React from 'react';
import PropTypes from 'prop-types';

export const Form = ({ children }) => {
  return (
    <form>
      {children}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  submit: Button,
  reset: Button
};

Form.defaultProps = {
  onSubmit: undefined,
  onReset: undefined,
};
