import "../screens/wishlist.css";
import Derecho from "../assets/Rectangle 474.png";
import Izquierdo from "../assets/Rectangle 475.png";
import Titulo from "../assets/Frame 180.png";
import CardWishlists from "../components/cardWishlist.jsx";
//import Mancuernas from "../assets/Items 1.png";
//import PesaRusa from "../assets/Group 113.png";
//import Saltacuerda from "../assets/Items 3.png";
//import RuedaAbdominal from "../assets/Group 114.png";

const Wishlist = () => {
    return (

        <div className="wishlist-container">
            <h1 className="titulo">Lista de Deseos</h1>
            <img src={Izquierdo} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
            <img src={Derecho} className="triangulo-derecho" alt="Triángulo Derecho" />
            <div className="center-content">
                <CardWishlists />
            </div>
        </div>



    );
};

export default Wishlist;
