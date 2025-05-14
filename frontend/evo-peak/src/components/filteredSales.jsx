import "./filteredSales.css";
import PieChart from "./filteredSalesPie.jsx"

const filteredSales = () => {
    return (
        <div className="filteredSales">
            <h2>Ventas por categoría</h2>
            <PieChart/>
        </div>
    );
}

export default filteredSales;