import React from 'react';

const SelectedCustomer = (props) => {
  return (
    <span>
      Selected Customer: {props.customer.name}
    </span>
  
  );
};

export default SelectedCustomer;