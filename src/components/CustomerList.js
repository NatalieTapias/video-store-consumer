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
            key={i}
            />);
          })}
      </>
      // <p>{console.log(props.allCustomers)}</p>
    );
  };
  
export default CustomerList;