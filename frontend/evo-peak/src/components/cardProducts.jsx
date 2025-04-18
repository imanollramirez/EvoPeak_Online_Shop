import React, { useState } from 'react';
import './cardProducts.css';

const ProductsCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="product-card">
      <div className="card-heart">♡</div>
      <img src={product.image} alt={product.title} className="card-image" />

      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">${product.price}</p>

      <div className="card-qty">
        <span>Cantidad:</span>
        <button onClick={() => handleQuantity(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantity(1)}>+</button>
      </div>

      <button className="card-add-btn">Agregar al carrito</button>
    </div>
  );
};

export default ProductsCard;
