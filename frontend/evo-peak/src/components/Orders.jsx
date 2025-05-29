import "../components/Orders.css"
import imagenMancuerna from "../assets/Image.png"
import pesaRusa from "../assets/5.png"
import ruedaAbdominal from "../assets/12.png"

const OrderCard = () => {
  const items = [
    {
      name: 'Set de mancuernas de 20LB',
      price: 20.0,
      img: imagenMancuerna,
    },
    {
      name: 'Pesa rusa de 10KG',
      price: 25.5,
      img: pesaRusa,
    },
    {
      name: 'Rueda abdominal',
      price: 18.0,
      img: ruedaAbdominal,
    },
  ];

  return (
    <div className="main-container-Orders">


      <div className="order-card">
      <div className="header">
        <div>
          <h2>Imanol Ramirez</h2>
          <br />
          <p className="address">
            Dirección: Calle Aguilares, S.S, El Salvador.
          </p>
        </div>
        <span className="status">En espera</span>
      </div>

      <div className="item-list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.name} />
            <div className="item-details">
              <p>{item.name}</p>
            </div>
            <p className="price">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <button className="deliver-button">Marcar como entregado</button>
    </div>

      <div className="order-card">
      <div className="header">
        <div>
          <h2>Daniel Soriano</h2>
          <br />
          <p className="address">
            Dirección: Calle Mariona, Depart. #45 Las tunas, El Salvador.
          </p>
        </div>
        <span className="status">Entregando</span>
      </div>

      <div className="item-list">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.img} alt={item.name} />
            <div className="item-details">
              <p>{item.name}</p>
            </div>
            <p className="price">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <button className="deliver-button">Marcar como entregado</button>
    </div>
    </div>
    
  );
};

export default OrderCard;