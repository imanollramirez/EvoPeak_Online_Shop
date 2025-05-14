import "./pendingOrders.css";

const pendingOrders = () => {
    return (
        <>
        <div className="pendingOrders">
            <div className="pendingOrders-icon">
            <i class="fa-solid fa-bell"></i>
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