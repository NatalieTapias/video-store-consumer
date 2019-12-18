import React from 'react';
import './Customer.css';
import PropTypes from 'prop-types';

const Customer = ({id, name, account_credit, movies_checked_out_count, selectCustomerCallback}) => {
  
    return (
      <div className="col-sm-4">
        <div className="card">
          <h3 className="card-title">{name}</h3>
          <div className="card-body">
            <p>Customer ID: {id}</p>
            <p>Account Credit: ${account_credit}</p>
            <p>movies checked out: {movies_checked_out_count}</p>
            <button 
              className="btn btn-primary"
              onClick={() => {selectCustomerCallback(id)}}>Select Customer</button></div>
        </div>
      </div>
    
    );
  };
  
export default Customer;

Customer.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  account_credit: PropTypes.number,
  movies_checked_out_count: PropTypes.number,
  selectCustomerCallback: PropTypes.func,
};