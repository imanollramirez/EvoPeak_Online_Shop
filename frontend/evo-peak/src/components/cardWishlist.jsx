const CardWishlists = () => {
    const cardData = [
      {
        title: 'Par de mancuernas de 20LB',
        price: '$ 40',
        quantity: 'Cantidad: -1+',
        buttonText: 'Agregar al carrito',
      },
      {
        title: 'Pesa Rusa de 10kg',
        price: '$ 25.50',
        quantity: 'Cantidad: -1+',
        buttonText: 'Agregar al carrito',
      },
      {
        title: 'Salta cuerdas 90cm',
        price: '$ 16.25',
        quantity: 'Cantidad: -1+',
        buttonText: 'Agregar al carrito',
      },
      {
        title: 'Rueda abdominal',
        price: '$ 18.00',
        quantity: 'Cantidad: -1+',
        buttonText: 'Agregar al carrito',
      },
    ];
  
    return (
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {cardData.map((card, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.price}</p>
                <p className="card-text">{card.quantity}</p>
                <button className="btn btn-primary">{card.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardWishlists;