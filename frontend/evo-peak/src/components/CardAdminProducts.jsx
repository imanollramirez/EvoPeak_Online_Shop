// CardAdminProducts.jsx
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CardAdminProducts = ({ prod,promoModal }) => {

  const handleDelete = (e) => 
  {
    e.stopPropagation();

    MySwal.fire({
      title: "¿Deseas eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        //deleteProduct(product._id);
        MySwal.fire("Eliminado!", "Se eliminó el producto con éxito!", "success");
      }
    });
  };

  return (
  <>
      <div className="product-card" onClick={() => promoModal(prod)} style={{ cursor: "pointer" }}>
        <img src={prod.image} alt={prod.name} className="product-img" />
        <span className="product-name">{prod.name}</span>
        <span className="product-stock">{prod.stock}</span>
        <span className="product-price">${prod.price.toFixed(2)}</span>
        <span className="product-category">{prod.category}</span>

        <div className="products-buttons">
          <button id="delete-btn" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
          <button id="edit-btn"><i className="fa-solid fa-pen"></i></button>
        </div>
      </div>
  </>
  );
}

export default CardAdminProducts;
