import React, { useState } from "react";
import "./PromoModal.css"

const PromoModal = ({ product, onClose }) => {
  const [discount, setDiscountPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const calcDiscount = () => {
    const precioOriginal = product.price;
    const porcentajeDescuento = parseFloat(discount);

    if(!porcentajeDescuento)
    {
      return ;
    }
    else{
      const descuento = precioOriginal * (porcentajeDescuento / 100);
    
    const totalConDescuento = precioOriginal - descuento;

    setTotalPrice(totalConDescuento.toFixed(2)); 
    }
  };

  return (
    <div className="promo-modal-overlay" onClick={onClose}>
      <div className="promo-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="promo-close-btn" onClick={onClose}>×</button>
        <h2 className="promo-title">{product.name}</h2>
        <div className="promo-img-container">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="promo-details">
          <div>
            <b>Precio:</b> <span>${product.price}</span>
          </div>
          <div>
            <b>Descuento (%):</b>
            <input
              id="discount"
              type="number"
              value={discount || ''}
              placeholder="0"
              onChange={(e) => setDiscountPrice(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: 8 }}>
            {totalPrice > 0 ? <b>Total Promoción:</b> : ''}
             <span className="promo-total" ></span> 
              {totalPrice > 0 ? `$${totalPrice}` : ''}
          </div>
        </div>
        <div className="promo-btns">
          <button className="promo-btn" onClick={calcDiscount}>Calcular descuento</button>
          <button className="promo-btn">Guardar promoción</button>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;