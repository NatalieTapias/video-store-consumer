import React from 'react';

const SelectedCustomer = (props) => {
  return (
    <div>
      <p>name: {props.customer.name}</p>
      <p>id: {props.customer.id}</p>
      <p>account credit: {props.customer.account_credit}</p>
      <p>movies checked out: {props.customer.movies_checked_out_count}</p>
    </div>
  
  );
};

export default SelectedCustomer;