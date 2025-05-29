// src/Customers/ListCustomers.jsx
import React from "react";
import CardAdminCustomers from "./CardAdminCustomers.jsx";
import useDataCustomers from "./Hooks/useDataCustomers.jsx";

const ListCustomers = () => {
  const { customers, loading, deleteCustomer } = useDataCustomers();

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CardAdminCustomers
          key={customer._id}
          customer={customer}
          deleteCustomer={deleteCustomer}
        />
      ))}
    </div>
  );
};

export default ListCustomers;
