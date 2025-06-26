import "../components/Orders.css";
import useDataOrders from "../components/Orders/Hooks/useDataOrders.jsx";

const OrderCard = () => {
  const {
    orders,
    updateOrders,
  } = useDataOrders();

  const handleMarkAsDelivered = (order) => {
    const updatedOrder = {
      ...order,
      id: order._id,
      status: "Entregado",
    };
    updateOrders(updatedOrder);
  };

  if (!orders.length) return <p>No hay órdenes registradas.</p>;

  return (
    <div className="main-container-Orders">
      {orders.map((order) => (
        <div className="order-card" key={order._id}>
          <div className="header">
            <div>
              <h2>{order.idCostumers?.name} {order.idCostumers?.lastName}</h2>
              <p className="address">Email: {order.idCostumers?.email}</p>
            </div>
            <span className="status">{order.status}</span>
          </div>

          <div className="item-list">
            {order.products.map((item, index) => (
              <div className="item" key={index}>
                <img
                  src={item.idProduct?.image || "/placeholder.jpg"}
                  alt={item.idProduct?.name || "Producto"}
                />
                <div className="item-details">
                  <p>{item.idProduct?.name || "Sin nombre"}</p>
                  <p className="price">Subtotal: ${item.subtotal?.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="total">
            Total: <strong>${order.total.toFixed(2)}</strong>
          </p>

          {order.status !== "Entregado" && (
            <button
              className="deliver-button"
              onClick={() => handleMarkAsDelivered(order)}
            >
              Marcar como entregado
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
