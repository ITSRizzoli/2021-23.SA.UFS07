import React from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../molecules/form/Form';

export const LoginForm = ( onSubmit ) => {
  return ( <Form />
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  onSubmit: undefined
};
