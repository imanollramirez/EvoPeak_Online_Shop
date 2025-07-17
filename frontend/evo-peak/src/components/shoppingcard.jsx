import React, { useState, useEffect } from 'react';
import cartMemory from '../utils/cartMemory';
import Trash from '../assets/Trash.png';
import '../components/shoppingcard.css';


const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const refreshCart = () => {
    const updated = cartMemory.getCart();
    setCartItems(updated);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const handleRemoveFromCart = (_id) => {
    cartMemory.removeItem(_id);
    refreshCart();
  };

  if (cartItems.length === 0) return <p>No hay productos en el carrito.</p>;

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cartItems.map((product, idx) => (
          <div className="col" key={idx}>
            <div className="card h-100 position-relative">
              <img
                src={Trash}
                alt="Eliminar"
                className="trash-icon"
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  cursor: 'pointer',
                  width: 24,
                  height: 24
                }}
                onClick={() => handleRemoveFromCart(product._id)}
              />
              <div className="card-img-container">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <p className="card-text">Cantidad: {product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
