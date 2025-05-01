import React, { useState } from 'react';
import Card2 from '../assets/4.png';
import Card3 from '../assets/9.png';
import Card4 from '../assets/10.png';
import Card1 from '../assets/Group 76.png';
import WishList from '../assets/WishList_Icon_White.png';

// Datos de productos
const products = [
  {
    img: Card4,
    title: 'Rueda abdominal',
    price: 18.00,
    description: 'Rueda abdominal para ejercicios de core y abdomen.',
    rating: 0,
  },
  {
    img: Card2,
    title: 'Pesa Rusa de 10kg',
    price: 25.50,
    description: 'Pesa rusa de 10kg, ideal para entrenamiento funcional.',
    rating: 0,
  },
  {
    img: Card3,
    title: 'Salta cuerdas 90cm',
    price: 16.25,
    description: 'Cuerda para saltar de 90cm, perfecta para cardio.',
    rating: 0,
  },
  {
    img: Card1,
    title: 'Set de mancuernas de 20LB',
    price: 40.00,
    description: 'Par de mancuernas de 20LB desmontables y armables, incluye sus roscas de seguridad y son altamente flexibles. Vienen 2 mancuernas, es decir, ambas por el mismo precio.',
    rating: 0,
  },
];

// Componente de estrellas interactivo
const StarRating = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState(null);
  
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        
        return (
          <label key={i}>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => onRatingChange(ratingValue)}
              style={{ display: 'none' }}
            />
            <span 
              className="star"
              style={{ 
                color: ratingValue <= (hover || rating) ? '#FFD700' : '#ccc',
                fontSize: '1.8em',
                cursor: 'pointer',
                margin: '0 2px'
              }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};

// Model de producto modificado con botones apilados verticalmente en negro
const ProductModal = ({ product, onClose, onRatingChange }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>×</button>
      <div className="product-image-container">
        <img src={product.img} alt={product.title} style={{ maxWidth: '200px', margin: '0 auto', display: 'block' }} />
      </div>
      <h2>{product.title}</h2>
      <p className="product-price"><b>Precio:</b> ${product.price.toFixed(2)}</p>
      <div className="product-description">
        <b>Descripción:</b>
        <p>{product.description}</p>
      </div>
      <div className="product-rating">
        <b>Valoración:</b>
        <StarRating 
          rating={product.rating} 
          onRatingChange={(newRating) => onRatingChange(product, newRating)} 
        />
      </div>
      <div className="product-actions">
  <button className="custom-btn" style={{ marginBottom: 10 }}>
    Añadir a lista de deseos
  </button>
  <button className="custom-btn">
    Agregar al carrito
  </button>
</div>

    </div>
  </div>
);


const CardWishlists = () => {
  const [modalProduct, setModalProduct] = useState(null);
  const [productsData, setProductsData] = useState(products);

  const handleRatingChange = (product, newRating) => {
    const updatedProducts = productsData.map(p => 
      p.title === product.title ? {...p, rating: newRating} : p
    );
    setProductsData(updatedProducts);
    
    // También actualizar el modal si está abierto
    if (modalProduct && modalProduct.title === product.title) {
      setModalProduct({...modalProduct, rating: newRating});
    }
  };

  return (
    <div className="product-container">
      <div className={`row row-cols-1 row-cols-md-4 g-4 ${modalProduct ? 'backdrop-blur' : ''}`}>
        {productsData.map((product, idx) => (
          <div className="col d-flex justify-content-center" key={idx}>
            <div 
              className="card custom-card-size" 
              onClick={() => setModalProduct(product)} 
              style={{ cursor: 'pointer' }}
            >
              <img 
                src={WishList} 
                alt="Agregar a Wishlist" 
                style={{ 
                  position: 'absolute', 
                  top: '10px', 
                  right: '10px', 
                  width: '30px', 
                  height: '24px',
                  zIndex: 2
                }} 
                onClick={(e) => {
                  e.stopPropagation();
                  // Lógica para agregar a wishlist
                }}
              />
              <div className="card-img-container">
                <img src={product.img} className="card-img-top" alt={product.title} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <p className="card-text">Cantidad: -1+</p>
                <button 
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Lógica para agregar al carrito
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {modalProduct && (
        <ProductModal 
          product={modalProduct} 
          onClose={() => setModalProduct(null)}
          onRatingChange={handleRatingChange}
        />
      )}
    </div>
  );
};

export default CardWishlists;
