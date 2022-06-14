import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({label}) => {
    return(
        <span>Ciao mondo</span>
    );
};

Text.PropTypes={
    label: PropTypes.string.isRequired,
};

Text.defaultProps = {
    label: undefined,
};