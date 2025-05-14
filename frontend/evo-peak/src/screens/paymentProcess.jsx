import Rectangle_1 from '../assets/Rectangle_paymentProcess_1.png';
import Rectangle_2 from '../assets/Rectangle_paymentProcess_2.png';
import Rectangle_3 from '../assets/Rectangle_paymentProcess_3.png';
import '../screens/paymentProcess.css';

const paymentProcess = () => {
  return (
    <div className='payment-process-container'>
      <img src={Rectangle_1} className='position-absolute top-50 start-0 translate-middle-y' />
      <img src={Rectangle_2} className='position-absolute bottom-0 start-50 translate-middle-x' />
      <img src={Rectangle_3} className='position-absolute top-50 end-0 translate-middle-y' />
      <div className="payment-method-container">
        <form className="payment-form position-absolute top-50 start-0 translate-middle-y mt-5">

          <h2>Método de pago</h2>

          <div className="payment-method-options mt-2">
            <button className="btn-credit">Crédito</button>
            <button className="btn-debit">Tarjeta/Débito</button>
          </div>

          <div className="inputs">
            <div className="form-group">
              <input type="text" placeholder="Nombre titular" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Número de tarjeta" required />
            </div>
            <div className="form-row d-flex justify-content-between">
              <div className="form-group">
                <input type="text" placeholder="MM/AA" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="CVV" required className='input-cvv' />
              </div>
            </div>
            <div className="form-group">
              <textarea placeholder="Escriba su dirección" required></textarea>
            </div>
            <button type="submit" className="btn-purchase mt-2">Enviar</button>
          </div>
        </form>

        <form className="products-form position-absolute top-50 end-0 translate-middle-y mt-5">

          <h2>Productos</h2>

          <div className="products-list">
            <div class="card-payment-process">
              <div class="product-info">
                <img src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png" alt="mancuernas" />
                <div class="product-details">
                  <div class="product-name">Set de mancuernas de 20LB</div>
                  <div class="product-price">$ 20.00</div>
                </div>
              </div>
              <div class="quantity-controls">
                <button onclick="decrease(this)">−</button>
                <div class="quantity">1</div>
                <button onclick="increase(this)">+</button>
              </div>
            </div>

            <div class="card-payment-process">
              <div class="product-info">
                <img src="https://cdn-icons-png.flaticon.com/512/10473/10473525.png" alt="pesa rusa" />
                <div class="product-details">
                  <div class="product-name">Pesa rusa de 10KG</div>
                  <div class="product-price">$ 25.50</div>
                </div>
              </div>
              <div class="quantity-controls">
                <button onclick="decrease(this)">−</button>
                <div class="quantity">1</div>
                <button onclick="increase(this)">+</button>
              </div>
            </div>

            <div class="card-payment-process">
              <div class="product-info">
                <img src="https://cdn-icons-png.flaticon.com/512/7616/7616597.png" alt="rueda abdominal" />
                <div class="product-details">
                  <div class="product-name">Rueda abdominal</div>
                  <div class="product-price">$ 18.00</div>
                </div>
              </div>
              <div class="quantity-controls">
                <button onclick="decrease(this)">−</button>
                <div class="quantity">1</div>
                <button onclick="increase(this)">+</button>
              </div>
            </div>
          </div>

          <button className="btn-purchase mt-2">Editar</button>

        </form>
      </div>

    </div>
  );
}

export default paymentProcess;