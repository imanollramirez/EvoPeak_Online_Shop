// CardAdminProducts.jsx
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function CardAdminProducts({ prod, onEdit, onDelete }) {
  return (
    <div className="product-card">
      <img src={prod.image} alt={prod.name} className="product-img" />
      <span className="product-name">{prod.name}</span>
      <span className="product-stock">{prod.stock}</span>
      <span className="product-price">${prod.price.toFixed(2)}</span>
      <span className="product-category">{prod.category}</span>
      <div className="actions">
        <button className="edit-btn" onClick={() => onEdit(prod)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => onDelete(prod)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
