import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../atoms/input/Input';
import { Button } from '../../atoms/button/Button';


export const Form = ({ onSubmit }) => {
  return ( <> <div> <Input /> </div><div> <Button /> </div></>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  onSubmit: undefined,
};
