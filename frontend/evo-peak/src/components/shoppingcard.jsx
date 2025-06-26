import React, { useState, useEffect } from 'react';
import cartMemory from '../utils/cartMemory';
import Trash from '../assets/Trash.png';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cartMemory.getCart());
  }, []);

  const handleRemoveFromCart = (title) => {
    cartMemory.removeItem(title);
    setCartItems(cartMemory.getCart());
  };

  if (cartItems.length === 0) return <p>No hay productos en el carrito.</p>;

  return (

    
    <div className="">
      {cartItems.map((product, idx) => (
        <div className="col d-flex justify-content-center" key={idx}>
          <div className="card custom-card-size">
          <img
  src={Trash}
  alt="Eliminar"
  className="trash-icon"
  onClick={() => handleRemoveFromCart(product.title)}
/>
            <div className="card-img-container">
              <img src={product.img} className="card-img-top" alt={product.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <p className="card-text">Cantidad: {product.quantity}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
