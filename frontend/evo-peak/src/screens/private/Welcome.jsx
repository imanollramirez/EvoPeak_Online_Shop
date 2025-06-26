import rectangleDer from "../../assets/Rectangle Der.png";
import rectangleIzq from "../../assets/Rectangle Izq.png";

//Dashboard Components
import MonthSales from "../../components/MonthSales.jsx";
import PendingOrders from "../../components/PendingOrders.jsx";
import Stock from "../../components/Stock.jsx";
import Balance from "../../components/balance.jsx";
import FilteredSales from "../../components/FilteredSales.jsx";
import SalesPerDay from "../../components/SalesPerDay.jsx";

import {useAuth} from "../../context/AuthContext.jsx"

import "./Welcome.css";


const Welcome = () => {

    const {user} = useAuth();

    return (
        <>

        <div className="products-container">
            <h1 className="title-welcome">Bienvenido/a</h1>
            <h2 className="subtitle">{user?.name || ''}</h2>
            <img src={rectangleIzq} className="left-t" />

            <div className="dashboard">
                <div className="left-panels">
                    <MonthSales/>
                    <Stock/>
                    <Balance/>
                    <PendingOrders/>
                </div>
                
                <div className="right-panels">
                    <FilteredSales/>
                    <SalesPerDay/>
                </div>
                
            </div>

            <img src={rectangleDer} className="right-t"/>
        </div>

        </>


    );
};





export default Welcome;
