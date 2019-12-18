import React from 'react';
import PropTypes from 'prop-types';

const SelectedCustomer = ({customer.name: customer}) => {
  return (
    <span>
      Selected Customer: {customer}
    </span>
  
  );
};

export default SelectedCustomer;

SelectedCustomer.propTypes = {
  customer: PropTypes.string,
};