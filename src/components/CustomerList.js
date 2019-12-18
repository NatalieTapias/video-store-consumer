import React from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';

const CustomerList = ({allCustomers, selectCustomerCallback}) => {
  
    return (
      <div className="row">
      {(allCustomers).map((oneCustomer, i) => {
        return(
          <Customer
            id={oneCustomer.id}
            name={oneCustomer.name}
            account_credit={oneCustomer.account_credit}
            movies_checked_out_count={oneCustomer.movies_checked_out_count}
            key={i}
            selectCustomerCallback={selectCustomerCallback}
            />);
          })}
      </div>
    );
  };
  
export default CustomerList;

CustomerList.propTypes = {
  allCustomers: PropTypes.array,
  selectCustomerCallback: PropTypes.func,
};