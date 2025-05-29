import "./monthSales.css";
import MonthSalesGraphic from "./MonthSalesGrahpic.jsx";

const monthSales = () => {
    return (
        <div className="monthSales">
            <div className="monthSales-title">
                <i className="fa-regular fa-calendar"></i>
                <h3>Month Sales</h3>
            </div>

            <div className="monthSales-icon text-center">
                <i className="fa-solid fa-bars-staggered fa-rotate-270"></i>
            </div>

            <div className="monthSales-content">
                <h2>$780.25</h2>
                <p>Ganancias <span className="earnings-percentage">+ 2.85%</span></p>
                <div className="chart"><MonthSalesGraphic /></div>
            </div>
            
        </div>
    );
}

export default monthSales;