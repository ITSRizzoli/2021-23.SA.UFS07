import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../../atoms/input/Input';
import { Button } from '../../atoms/button/Button';


export const Form = ( onSubmit, onReset ) => {
  return ( <form>
    <div>
      <Input />
      <Button label='Submit' onClick={ onSubmit }/>
      <Button label='Reset' onClick={ onReset }/>
    </div>
  </form>
  );
};

Form.propTypes = {
  inputs: [Input],
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  submit: Button,
  reset: Button
};

Form.defaultProps = {
  onSubmit: undefined,
  onReset: undefined,
};
