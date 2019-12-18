import React from 'react';
import PropTypes from 'prop-types';

const SelectedCustomer = ({customer}) => {
  return (
    <span>
      Selected Customer: {customer.name}
    </span>
  
  );
};

export default SelectedCustomer;

SelectedCustomer.propTypes = {
  customer: PropTypes.object,
};