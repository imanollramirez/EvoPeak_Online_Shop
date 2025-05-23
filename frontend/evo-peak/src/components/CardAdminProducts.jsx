// CardAdminProducts.jsx
import React from "react";

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

        </button>
        <button className="delete-btn" onClick={() => onDelete(prod)}>
    
        </button>
      </div>
    </div>
  );
}
