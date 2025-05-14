import React, { useState } from 'react';
import Card1 from '../assets/Group 76.png';

const productPromo = {
  img: Card1,
  title: 'Set de mancuernas de 20LB',
  price: 40.00,
  discount: 10, // porcentaje
};

const PromoModal = ({ product, onClose }) => {
  const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);

  return (
    <div className="promo-modal-overlay" onClick={onClose}>
      <div className="promo-modal-card" onClick={e => e.stopPropagation()}>
        <button className="promo-close-btn" onClick={onClose}>×</button>
        <h2 className="promo-title">{product.title}</h2>
        <div className="promo-img-container">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="promo-details">
          <div><b>Precio:</b> <span>${product.price}</span></div>
          <div><b>Descuento:</b> <span>% {product.discount}</span></div>
          <div style={{ marginTop: 8 }}><b>Total Promoción:</b><br /><span className="promo-total">${discountedPrice}</span></div>
        </div>
        <div className="promo-btns">
          <button className="promo-btn">Calcular descuento</button>
          <button className="promo-btn">Guardar promoción</button>
        </div>
      </div>
    </div>
  );
};

const PromoPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`promo-bg ${showModal ? 'blurred' : ''}`}>
      <header style={{ padding: 24 }}>
        <button className="open-modal-btn" onClick={() => setShowModal(true)}>
          Abrir promoción
        </button>
      </header>
      {showModal && (
        <PromoModal product={productPromo} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default PromoPage;
