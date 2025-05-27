import "./pendingOrders.css";
import TrianguloIzq from "../assets/Rectangle 474.png"
import TrianguloDer from "../assets/Rectangle 475.png"
import trianguloMedioIzq from "../assets/Group 10496.png"
import trianguloMedioDer from "../assets/Group 10497.png"

const pendingOrders = () => {
    return (
        <>
        <div className="pendingOrders">
            <div className="pendingOrders-icon">
            <i className="fa-solid fa-bell"></i>
            </div>
            <div>
            <h2>Pedidos pendientes</h2>
            <span className="pendingOrders-count">10</span>
            </div>
        </div>
        </>
    );
}

export default pendingOrders;