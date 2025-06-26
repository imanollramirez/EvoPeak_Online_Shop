import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import cartMemory from '../utils/cartMemory';
import Card2 from '../assets/4.png';
import Card3 from '../assets/9.png';
import Card4 from '../assets/10.png';
import Card1 from '../assets/Group 76.png';
import WishList from '../assets/WishList_Icon_White.png';
import Trash from '../assets/Trash.png';

const products = [
  {
    title: 'Rueda abdominal',
    img: Card4,
    price: 18.0,
    //...
  },
  // ...otros productos
];

const ProductsCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isShoppingCartPage = location.pathname === '/shoppingcar';

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cartMemory.getItems());
  }, []);

  const handleAddToCart = (product) => {
    cartMemory.addItem(product);
    setCartItems(cartMemory.getItems());
    navigate('/shoppingcar');
  };

  const handleRemoveFromCart = (title) => {
    cartMemory.removeItem(title);
    setCartItems(cartMemory.getItems());
  };

  // Aquí va la condición que compartiste:
  if (isShoppingCartPage) {
    if (cartItems.length === 0) return <p>No hay productos en el carrito.</p>;

    return (
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cartItems.map((product, idx) => (
          <div className="col d-flex justify-content-center" key={idx}>
            <div className="card custom-card-size">
              <img
                src={Trash}
                alt="Eliminar"
                style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 40, cursor: 'pointer' }}
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
  }

  // Aquí el listado normal de productos para agregar al carrito:
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((product, idx) => (
        <div className="col d-flex justify-content-center" key={idx}>
          <div className="card custom-card-size">
            <img src={WishList} alt="Agregar a Wishlist" style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 24, cursor: 'pointer' }} />
            <div className="card-img-container">
              <img src={product.img} className="card-img-top" alt={product.title} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">${product.price.toFixed(2)}</p>
              <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
