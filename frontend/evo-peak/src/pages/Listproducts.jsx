import CardAdmin from "../components/CardAdminProducts.jsx"
import { useState } from "react";
import "../components/Productlist.css"; // Importa el CSS
import { FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Mancuernas de ...",
    stock: 100,
    price: 20.0,
    category: "12312flf194591491",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  },
  {
    id: 2,
    name: "Pesa rusa de 10 kg",
    stock: 129,
    price: 25.5,
    category: "kdakjd19491849141",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048951.png",
  },
  {
    id: 3,
    name: "Salta cuerdas de ...",
    stock: 20,
    price: 16.25,
    category: "dasd1415151cdasdad",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048954.png",
  },
  {
    id: 4,
    name: "Rueda abdominal",
    stock: 10,
    price: 18.0,
    category: "odklsadka01040kkak",
    image: "https://cdn-icons-png.flaticon.com/512/1048/1048952.png",
  },
];

 function Listproducts() {
    const [openMenuId, setOpenMenuId] = useState(null);
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
          <span>idCategoria</span>
          <span></span>
        </div>
        {products.map((prod) => (
        <CardAdmin
        key={prod.id}
        prod={prod}
        openMenuId={openMenuId}
        setOpenMenuId={setOpenMenuId}
        />
        ))}
      </div>
    );
  }
  


export default Listproducts;
