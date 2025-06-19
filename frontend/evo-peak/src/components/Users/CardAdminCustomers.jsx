import React from "react";

const CardAdminCustomers = ({ customer, onEdit, onDelete }) => (
  <div className="customer-card">
    <span className="customer-img-box">
      <img
        src={customer.profilePic}
        alt={customer.name}
        className="customer-img"
      />
    </span>
    <span className="customer-name">{customer.name}</span>
    <span className="customer-lastname">{customer.lastName}</span>
    <span className="customer-phone">{customer.phone}</span>
    <span className="customer-email">{customer.email}</span>
    <span className="customer-dui">{customer.dui}</span>
    <span className="customer-actions">
      <button className="icon-btn" onClick={() => onDelete(customer._id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
      <button className="icon-btn" onClick={() => onEdit(customer)}>
        <i className="fa-solid fa-pen"></i>
      </button>
    </span>
  </div>
);

export default CardAdminCustomers;
