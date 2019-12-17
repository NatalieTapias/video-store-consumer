import React from 'react';

const Customer = (props) => {
  
    return (
      <div>
        <p>name: {props.name}</p>
        <p>id: {props.id}</p>
        <p>account credit: {props.account_credit}</p>
        <p>movies checked out: {props.movies_checked_out_count}</p>
        <button onClick={() => {props.selectCustomerCallback(props.id)}}>
          Select Customer
        </button>
      </div>
    
    );
  };
  
export default Customer;