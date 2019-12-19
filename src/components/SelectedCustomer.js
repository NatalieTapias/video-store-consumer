import React from 'react';
import PropTypes from 'prop-types';

const SelectedCustomer = ({customer}) => {
  return (
    <span className="selected">
      <h3>Selected Customer: 
        <div className="selected-customer-name">{customer.name}</div>
      </h3> 
    </span>
  
  );
};

export default SelectedCustomer;

SelectedCustomer.propTypes = {
  customer: PropTypes.object,
};