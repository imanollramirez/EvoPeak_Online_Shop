import "./balance.css"

const balance = () => {
    return (
        <div className="balance">
            <div className="balance-icon">
                <i class="fa-solid fa-sack-dollar"></i>
            </div>
            <div>
            <h2>Saldo disponible</h2>
            <span className="balance-stock">200</span>
            </div>
        </div>
    );
}

export default balance;