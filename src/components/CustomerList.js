import React from 'react';
import Customer from './Customer';

const CustomerList = (props) => {
  
    return (
      <>
      {(props.allCustomers).map((oneCustomer, i) => {
        return(
          <Customer
            id={oneCustomer.id}
            name={oneCustomer.name}
            account_credit={oneCustomer.account_credit}
            movies_checked_out_count={oneCustomer.movies_checked_out_count}
            key={i}
            />);
          })}
      </>
    );
  };
  
export default CustomerList;