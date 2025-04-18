import rectangleDer from "../assets/Rectangle Der.png"
import rectangleIzq from "../assets/Rectangle Izq.png"
import FilterPill from "../components/filterPill.jsx"
import "../pages/products.css"
import Titulo from "../assets/ProductTitle.png";
import ProductsCard from "../components/cardProducts.jsx";


const Products = () => {
    return (
        
        <div className="products-container">
        <img src={Titulo} className="titulo" alt="Productos" />
        <div className="filter-wrapper">
            <FilterPill />
        </div>
        <img src={rectangleIzq} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
        <img src={rectangleDer} className="triangulo-derecho" alt="Triángulo Derecho" />
        <div className="center-content">        
            <ProductsCard />
        </div>
    </div>
                
            
        
    );
};





export default Products;
