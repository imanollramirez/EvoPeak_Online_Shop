import React, { useState } from "react";
import imgMancuernas from "../../assets/Group 76.png";
import imgPesaRusa from "../../assets/4.png";
import imgSaltaCuerdas from "../../assets/9.png";
import imgRuedaAbdominal from "../../assets/10.png";
import Derecho from "../../assets/Rectangle 474.png";
import Izquierdo from "../../assets/Rectangle 475.png";
import "./ProductsAdmin.css"; // tu CSS original

import PromoModal from "../../components/PromoModal.jsx"

const initialProducts = [
  {
    id: 1,
    name: "Set de mancuernas de 20LB",
    stock: 100,
    price: 40.0,
    discount: 10,
    category: "12312flf194591491",
    image: imgMancuernas,
  },
  {
    id: 2,
    name: "Pesa rusa de 10 kg",
    stock: 129,
    price: 25.5,
    discount: 5,
    category: "kdakjd19491849141",
    image: imgPesaRusa,
  },
  {
    id: 3,
    name: "Salta cuerdas de alta calidad",
    stock: 20,
    price: 16.25,
    discount: 0,
    category: "dasd1415151cdasdad",
    image: imgSaltaCuerdas,
  },
  {
    id: 4,
    name: "Rueda abdominal",
    stock: 10,
    price: 18.0,
    discount: 15,
    category: "odklsadka01040kkak",
    image: imgRuedaAbdominal,
  },
];

const CardAdminProducts = ({ prod, onClick }) => (
  <div className="product-card" onClick={() => onClick(prod)} style={{ cursor: "pointer" }}>
    <div className="product-name">
      <img src={prod.image} alt={prod.name} className="product-img" />
      {prod.name}
    </div>
    <span className="product-stock">{prod.stock}</span>
    <span className="product-price">${prod.price.toFixed(2)}</span>
    <span className="product-category">{prod.category}</span>
  </div>
);

function ProductsAdmin() {
  const [products] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-page-container">
      <img src={Izquierdo} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
      <img src={Derecho} className="triangulo-derecho" alt="Triángulo Derecho" />

      {/* Aplica desenfoque cuando el modal está abierto */}
      <div className={`product-page${selectedProduct ? " blurred" : ""}`}>
        <div className="product-header">
          <h1>Productos</h1>
          <button className="add-btn-product">Agregar</button>
          <button className="add-btn-category">Agregar Categoría</button>
        </div>
        <div className="product-table-header">
          <span>Nombre</span>
          <span>Stock</span>
          <span>Precio</span>
          <span>idCategoría</span>
        </div>
        <div className="product-list">
          {products.map((prod) => (
            <CardAdminProducts
              key={prod.id}
              prod={prod}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <PromoModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>

    
  );

  
}

export default ProductsAdmin;
