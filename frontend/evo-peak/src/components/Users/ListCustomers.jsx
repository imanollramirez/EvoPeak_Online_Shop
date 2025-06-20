// src/Customers/ListCustomers.jsx
import React from "react";
import CardAdminCustomers from "./CardAdminCustomers.jsx";
import useDataCustomers from "./Hooks/useDataCustomers.jsx";

const ListCustomers = () => {
  const { customers, deleteCustomer } = useDataCustomers();

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CardAdminCustomers
          key={customer._id}
          customer={customer}
          onDelete={deleteCustomer}
        />
      ))}
    </div>
  );
};

export default ListCustomers;
