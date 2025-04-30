import Card2 from '../assets/4.png';
import Card3 from '../assets/9.png';
import Card4 from '../assets/10.png';
import Card1 from '../assets/Group 76.png';
import WishList from '../assets/WishList_Icon.png';


const ProductsCard = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4"> 
      <div className="col d-flex justify-content-center">
        <div className='card-inner'>
        <div className="card custom-card-size">
        <img src={WishList} alt="Agregar a Wishlist" style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '24px', cursor: 'pointer' }} />
          <div className="card-img-container">
            <img src={Card4} className="card-img-top" alt="Rueda abdominal" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Rueda abdominal</h5>
            <p className="card-text">$18.00</p>
            <p className="card-text">Cantidad: -1+</p>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>

        </div>
        
      </div>

      <div className="col d-flex justify-content-center">
        <div className="card custom-card-size">
        <img src={WishList} alt="Agregar a Wishlist" style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '24px', cursor: 'pointer' }} />
          <div className="card-img-container">
            <img src={Card2} className="card-img-top" alt="Pesa Rusa" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Pesa Rusa de 10kg</h5>
            <p className="card-text">$25.50</p>
            <p className="card-text">Cantidad: -1+</p>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>

      <div className="col d-flex justify-content-center">
        <div className="card custom-card-size">
        <img src={WishList} alt="Agregar a Wishlist" style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '24px', cursor: 'pointer' }} />
          <div className="card-img-container">
            <img src={Card3} className="card-img-top" alt="Salta cuerdas" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Salta cuerdas 90cm</h5>
            <p className="card-text">$16.25</p>
            <p className="card-text">Cantidad: -1+</p>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>

      {
     
      <div className="col d-flex justify-content-center">
        <div className="card custom-card-size">
        <img src={WishList} alt="Agregar a Wishlist" style={{ position: 'absolute', top: '10px', right: '10px', width: '30px', height: '24px', cursor: 'pointer' }} />
          <div className="card-img-container">
          <img src={Card1} className="card-img-top" alt="Salta cuerdas" />
          
          </div>
          <div className="card-body">
            <h5 className="card-title">Par de mancuernas</h5>
            <p className="card-text">$40.00</p>
            <p className="card-text">Cantidad: -1+</p>
            <button className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div> 
      }
    </div>
  );
};

export default ProductsCard;
