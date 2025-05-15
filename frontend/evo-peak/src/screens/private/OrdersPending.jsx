import PendingOrders from "../../components/Orders.jsx"
import "../../screens/private/OrdersPending.css"

const OrdersPending = () => {


    return (

        <>

        <div className="main-container-ordersPending">
            <h1 className="titulo-orderspending">Pedidos</h1>
            <div className="container-cards">
                <PendingOrders/>
            </div>
        </div>


        </>
    );
};

export default OrdersPending;