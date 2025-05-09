import CardAdminProducts from "../components/CardAdminProducts.jsx";
import { useState } from "react";
import "../components/Productlist.css";

// Importa tus imágenes locales
import imgMancuernas from "../assets/Group 76.png";
import imgPesaRusa from "../assets/4.png";
import imgSaltaCuerdas from "../assets/9.png";
import imgRuedaAbdominal from "../assets/10.png";



const products = [

    
  {
    id: 1,
    name: "Mancuernas de ...",
    stock: 100,
    price: 20.0,
    category: "12312flf194591491",
   image: imgMancuernas,
  },
  {
    id: 2,
    name: "Pesa rusa de 10 kg",
    stock: 129,
    price: 25.5,
    category: "kdakjd19491849141",
    image: imgPesaRusa,
  },
  {
    id: 3,
    name: "Salta cuerdas de ...",
    stock: 20,
    price: 16.25,
    category: "dasd1415151cdasdad",
    image: imgSaltaCuerdas,
  },
  {
    id: 4,
    name: "Rueda abdominal",
    stock: 10,
    price: 18.0,
    category: "odklsadka01040kkak",
    image: imgRuedaAbdominal,
  },
];

function Listproducts() {
  // Puedes agregar tus funciones onEdit y onDelete aquí
  const onEdit = (prod) => alert(`Editar ${prod.name}`);
  const onDelete = (prod) => alert(`Eliminar ${prod.name}`);

  return (

    
    <div className="product-page">
      <div className="product-header">
        <h1>PRODUCTOS</h1>
        <button className="add-btn">Agregar</button>
      </div>
      <div className="product-table-header">
        <span>Nombre</span>
        <span>Stock</span>
        <span>Precio</span>
        <span>idCategoría</span>
        <span></span>
      </div>
      <div className="product-list">
        {products.map((prod) => (
          <CardAdminProducts
            key={prod.id}
            prod={prod}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Listproducts;
