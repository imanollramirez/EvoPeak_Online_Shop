import { useEffect, useState } from "react";
import FilterPill from "../components/filterPill.jsx";
import ProductsCard from "../components/cardProducts.jsx";
import "../screens/products.css";
import rectangleDer from "../assets/Rectangle Der.png";
import rectangleIzq from "../assets/Rectangle Izq.png";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Todo");

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/products");
      const data = await res.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
    if (categoryName === "Todo") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.idCategory?.name === categoryName
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="products-container">
      <h1 className="titulo">PRODUCTOS</h1>
      <div className="filter-wrapper">
        <FilterPill
          onCategorySelect={handleCategorySelect}
          activeCategory={activeCategory}
        />
      </div>
      <img src={rectangleIzq} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
      <img src={rectangleDer} className="triangulo-derecho" alt="Triángulo Derecho" />
      <div className="center-content">
        <ProductsCard products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;
