import rectangleDer from "../../assets/Rectangle Der.png"
import rectangleIzq from "../../assets/Rectangle Izq.png"
import "./Welcome.css"


const Welcome = () => {
    return (
        <>

        <div className="products-container">
            <h1 className="title-welcome">Bienvenido/a</h1>
            <h2 className="subtitle">Usuario</h2>
            <img src={rectangleIzq} className="left-t" />

            <div className="dashboard">
                <div className="left-panels">
                    <div className="monthSales"></div>
                    <div className="pendingOrders"></div>
                    <div className="stock"></div>
                    <div className="balance"></div>
                </div>
                
                <div className="right-panels">
                    <div className="filteredSales"></div>
                    <div className="salesPerDay"></div>
                </div>
                
            </div>

            <img src={rectangleDer} className="right-t"/>
        </div>

        </>


    );
};





export default Welcome;
