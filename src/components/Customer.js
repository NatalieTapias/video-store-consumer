import React from 'react';
import './Customer.css';

const Customer = (props) => {
  
    return (
      <div className="col-sm-4">
        <div className="card">
          <h3 className="card-title">{props.name}</h3>
          <div className="card-body">
            <p>Customer ID: {props.id}</p>
            <p>Account Credit: ${props.account_credit}</p>
            <p>movies checked out: {props.movies_checked_out_count}</p>
            <button 
              className="btn btn-primary"
              onClick={() => {props.selectCustomerCallback(props.id)}}>Select Customer</button></div>
        </div>
      </div>
    
    );
  };
  
export default Customer;