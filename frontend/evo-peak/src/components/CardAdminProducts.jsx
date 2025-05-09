// ProductList.jsx
import React, { useState } from "react";
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";

export default function ProductList({prod, openMenuId, setOpenMenuId}) {


  return (
    <div className="product-card" key={prod.id}>
    <img src={prod.image} alt={prod.name} className="product-img" />
    <span className="product-name">{prod.name}</span>
    <span>{prod.stock}</span>
    <span>${prod.price.toFixed(2)}</span>
    <span>{prod.category}</span>
    <div className="actions">
      <button
        className="more-btn"
        onClick={() =>
          setOpenMenuId(openMenuId === prod.id ? null : prod.id)
        }
      >
        <FaEllipsisV />
      </button>
      {openMenuId === prod.id && (
        <div className="action-menu">
          <button className="edit-btn">
            <FaEdit />
          </button>
          <button className="delete-btn">
            <FaTrash />
          </button>
        </div>
      )}
    </div>
  </div>
  );
}
