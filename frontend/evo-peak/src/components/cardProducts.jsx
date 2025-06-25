import React, { useState, useEffect } from 'react';
import useDataProducts from '../components/Products/Hooks/UseDataProducts.jsx'; 
import WishList from '../assets/WishList_Icon_White.png';

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

// Modal de producto
const ProductModal = ({ product, onClose, onRatingChange }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2 className='text-start'>{product.name}</h2>

      <div className="modal-content">
        <div className="img-rating">
          <div className="product-image-container">
            <img src={product.image} alt={product.name} style={{ maxWidth: '200px', margin: '0 auto', display: 'block' }} />
          </div>
          <div className="product-rating">
            <StarRating
              rating={product.rating || 0}
              onRatingChange={(newRating) => onRatingChange(product, newRating)}
            />
          </div>
        </div>

        <div className="product-info">
          <p className="product-price">Precio: ${product.price.toFixed(2)}</p>
          <div className="product-description">
            <b>Descripción:</b>
            <p>{product.description || 'Sin descripción disponible.'}</p>
          </div>

          <div className="product-actions">
            <button className="custom-btn">Añadir a lista de deseos</button>
            <button className="custom-btn">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CardWishlists = () => {
  const { products, fetchProducts } = useDataProducts();
  const [modalProduct, setModalProduct] = useState(null);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchProducts(); // cargar productos del backend
  }, []);

  useEffect(() => {
    // Sincroniza los productos reales al estado local con estrellas
    const enrichedProducts = products.map((p) => ({ ...p, rating: 0 }));
    setProductsData(enrichedProducts);
  }, [products]);

  const handleRatingChange = (product, newRating) => {
    const updatedProducts = productsData.map((p) =>
      p._id === product._id ? { ...p, rating: newRating } : p
    );
    setProductsData(updatedProducts);

    if (modalProduct && modalProduct._id === product._id) {
      setModalProduct({ ...modalProduct, rating: newRating });
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
                  // lógica para wishlist
                }}
              />
              <div className="card-img-container">
                <img src={product.image} className="card-img-top" alt={product.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <p className="card-text">Cantidad: {product.stock}</p>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    // lógica para agregar al carrito
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
