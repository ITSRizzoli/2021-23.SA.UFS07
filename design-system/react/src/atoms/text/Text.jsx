import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({ label }) => {
    return (
        <span>Ciao Mondo!</span>
    )
}

Text.propTypes = {

    label: PropTypes.string.isRequired,

};

Text.defaultProps = {
    
};
