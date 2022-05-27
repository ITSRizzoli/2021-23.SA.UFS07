import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../atoms/input/Input';
import { Button } from '../../atoms/button/Button';


export const Form = ( onSubmit ) => {
  return ( <form> </form>
  );
};

Form.propTypes = {
  inputs: Input,
  onSubmit: PropTypes.func.isRequired,
  submit: Button,
  reset: Button
};

Form.defaultProps = {
  onSubmit: undefined,
};
