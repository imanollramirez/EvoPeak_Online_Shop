import { useState, useEffect } from "react";
import useDataPromotions from "./Promotions/useDataPromotions";

import "./PromoModal.css"

import Swal from "sweetalert2";

const PromoModal = ({ product, onClose }) => {

  const { fetchPromotion, savePromotions, updatePromotions, deletePromotions } = useDataPromotions();

  const [Promotion, setPromotion] = useState({});
  const [idProducts, setIdProducts] = useState(product._id);
  const [Discount, setDiscountPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const operation = () => {
    const descuento = product.price * (parseFloat(Discount) / 100);

    const totalConDescuento = product.price - descuento;

    return totalConDescuento.toFixed(2);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPromotion(product._id);
      if (!data) {
        return null;
      } else {
        setPromotion(data);
        setDiscountPrice(data.Discount);

        setTotalPrice(operation);
      }
    };

    fetchData();
  }, []);


  const calcDiscount = () => {

    if (!Discount || Discount === 0) {
      Swal.fire({
        icon: "error",
        title: "Complete el campo!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      })
    }
    else {
      setTotalPrice(operation);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const promotionData = {
      id: Promotion?._id,
      idProducts,
      Discount
    };

    if (promotionData?.idProducts === Promotion?.idProducts) {
      updatePromotions(promotionData);
      onClose();
    } else {
      savePromotions(promotionData);
      onClose();
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation()
    Swal.fire({
      title: "¿Deseas eliminar esta promoción?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Sí",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePromotions(Promotion._id);
        onClose();
        Swal.fire({
          icon: "success",
          title: "Promoción eliminada con éxito!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  };


  return (
    <div className="promo-modal-overlay" onClick={onClose}>
      <form className="promo-modal-card" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <button className="promo-close-btn" onClick={onClose}>×</button>
        {Promotion.Discount > 0 ? <button type="button" className="promo-delete-btn mt-5 pe-2" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button> : ''}
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
              min={0}
              max={100}
              value={Discount || ''}
              placeholder="0"
              onChange={(e) => setDiscountPrice(e.target.value)}
              required
            />
          </div>
          <div style={{ marginTop: 8 }}>
            <b>Total Promoción:</b>
            <span className="promo-total"></span>
            {"$" + totalPrice}
          </div>
        </div>
        <div className="promo-btns">
          <button type="button" className="promo-btn" onClick={calcDiscount}>Calcular descuento</button>
          <button type="submit" className="promo-btn">Guardar promoción</button>
        </div>
      </form>
    </div>
  );
};

export default PromoModal;