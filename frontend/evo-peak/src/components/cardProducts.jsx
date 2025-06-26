import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WishList from "../assets/WishList_Icon_White.png";
import cartMemory from "../../src/utils/cartMemory";

const ProductsCard = ({ products }) => {
  const navigate = useNavigate();
  const [modalProduct, setModalProduct] = useState(null);
  const [productsData, setProductsData] = useState(products || []);
  
  // Estado para cantidades: { [productId]: cantidad }
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setProductsData(products);
    // Inicializar cantidades en 1 para todos los productos
    if(products) {
      const initialQuantities = {};
      products.forEach(p => {
        initialQuantities[p._id] = 1;
      });
      setQuantities(initialQuantities);
    }
  }, [products]);

  const handleIncrease = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const handleDecrease = (productId) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: prev[productId] > 1 ? prev[productId] - 1 : 1,
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product._id] || 1;
    cartMemory.addItem({...product, quantity});
    navigate("/shoppingcar");
  };

  // (ModalProduct igual que antes, lo omito aquí por brevedad...)

  const ProductModal = ({ product, onClose }) => {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
          <h2 className="text-start">{product.name || product.title}</h2>
          <div className="modal-content">
            <div className="img-rating">
              <div className="product-image-container">
                <img
                  src={product.image || product.img}
                  alt={product.name || product.title}
                  style={{ maxWidth: "200px", margin: "0 auto", display: "block" }}
                />
              </div>
            </div>
            <div className="product-info">
              <p className="product-price">
                Precio: ${product.price?.toFixed(2)}
              </p>
              <div className="product-description">
                <b>Descripción:</b>
                <p>{product.description || "Sin descripción"}</p>
              </div>
              <div className="product-actions">
                <button className="custom-btn">Añadir a lista de deseos</button>
                <button
                  className="custom-btn"
                  onClick={() => {
                    cartMemory.addItem(product);
                    navigate("/shoppingcar");
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <div className="product-container">
      <div
        className={`row row-cols-1 row-cols-md-4 g-4 ${
          modalProduct ? "backdrop-blur" : ""
        }`}
      >
        {productsData?.map((product) => (
          <div
            className="col d-flex justify-content-center"
            key={product._id || product.title}
          >
            <div
              className="card custom-card-size"
              onClick={() => setModalProduct(product)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img
                src={WishList}
                alt="Agregar a Wishlist"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "30px",
                  height: "24px",
                  zIndex: 2,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  // lógica para wishlist aquí si quieres
                }}
              />
              <div className="card-img-container">
                <img
                  src={product.image || product.img}
                  className="card-img-top"
                  alt={product.name || product.title}
                />
              </div>
              <div className="card-body" onClick={e => e.stopPropagation()}>
                <h5 className="card-title">{product.name || product.title}</h5>
                <p className="card-text">${product.price?.toFixed(2)}</p>

                {/* Controles de cantidad */}
                <div className="quantity-control" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <button
                    onClick={() => handleDecrease(product._id)}
                    style={{ padding: '4px 10px', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    -
                  </button>
                  <span>{quantities[product._id] || 1}</span>
                  <button
                    onClick={() => handleIncrease(product._id)}
                    style={{ padding: '4px 10px', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
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
        />
      )}
    </div>
  );
};

export default ProductsCard;
