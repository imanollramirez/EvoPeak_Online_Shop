import "./stock.css"

const stock = () => {
    return (
        <div className="stock">
            <div className="stock-icon">
                <i class="fa-solid fa-cubes"></i>
            </div>
            <div>
            <h2>Productos existentes</h2>
            <span className="stock-count">200</span>
            </div>
        </div>
    );
}

export default stock;