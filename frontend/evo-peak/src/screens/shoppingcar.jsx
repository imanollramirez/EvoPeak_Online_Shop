import "../screens/shoppingcar.css";
import Derecho from "../assets/Rectangle 474.png";
import Izquierdo from "../assets/Rectangle 475.png";
import Titulo from "../assets/compras.png";
import Shopping from "../components/shoppingcard";
//import Mancuernas from "../assets/Items 1.png";
//import PesaRusa from "../assets/Group 113.png";
//import Saltacuerda from "../assets/Items 3.png";
//import RuedaAbdominal from "../assets/Group 114.png";

const Shoppingcard = () => {
    return (
        <div className="shopping-container">
            <h1 className="titulo">Carrito de Compras</h1>
            <div className="button-container">
                <a href="/paymentProcess"><button className="pay-button">Ir a pagar</button></a>
            </div>
            <img src={Izquierdo} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
            <img src={Derecho} className="triangulo-derecho" alt="Triángulo Derecho" />
            <div className="center-content">
                <Shopping />
            </div>
           
        </div>
    );
};

export default Shoppingcard;
