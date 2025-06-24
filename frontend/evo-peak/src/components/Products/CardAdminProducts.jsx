import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PromoModal from "../../components/PromoModal.jsx";
import UseDataProducts from "../Products/Hooks/UseDataProducts.jsx"
import UseDataPromotions from "../Promotions/useDataPromotions.jsx";

import RegisterProducts from "./RegisterProducts.jsx"

const MySwal = withReactContent(Swal);

const CardAdminProducts = ({ product, deleteProduct, categories}) => {

  const {updateProducts} = UseDataProducts();

  const [showModal, setShowModal] = useState(false);
  
  const handleDiscount = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();

    MySwal.fire({
      title: "¿Deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product._id);
        MySwal.fire({
          icon: "success",
          title: "Producto eliminado con éxito!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    });
  };

  const handleUpdate = () => {
  MySwal.fire({
    title: "Actualizar Producto",
    html: (
      <RegisterProducts
        product={product}
        categories={categories}
        onUpdate={(products) => {
        updateProducts(products);
          MySwal.fire({
          icon: "success",
          title: "Producto actualizado con éxito!",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        }}
        onCancel={() => MySwal.close()}
      />
    ),
    showConfirmButton: false,
    showCancelButton: false,
    customClass: {
      popup: "my-swal-popup",
      title: "my-swal-title",
    },
    width: "600px",
    background: "#f9fafb",
    backdrop: "rgba(0, 0, 0, 0.5)",
    showCloseButton: true,
  });
};



  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-img" />
        <span className="product-name">{product.name}</span>
        <span className="product-stock">{product.stock}</span>
        <span className="product-price">${product.price}</span>
        <span className="product-category">{product.idCategory?.name}</span>

        <div className="products-buttons">
          <button id="discount-btn" onClick={handleDiscount}>
            <i className="fa-solid fa-percent"></i>
          </button>
          <button id="delete-btn" onClick={handleDelete}>
            <i className="fa-solid fa-trash"></i>
          </button>
          <button id="edit-btn" onClick={handleUpdate}>
            <i className="fa-solid fa-pen"></i>
          </button>
        </div>
      </div>

      {showModal && (
        <PromoModal product={product} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default CardAdminProducts;
