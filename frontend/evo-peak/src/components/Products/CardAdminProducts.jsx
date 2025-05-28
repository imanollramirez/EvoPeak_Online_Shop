// CardAdminProducts.jsx
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PromoModal from "../../components/PromoModal.jsx"


const MySwal = withReactContent(Swal);

const CardAdminProducts = ({ product, deleteProduct }) => {

  const handleDiscount = (e) => {
      e.stopPropagation();

      <PromoModal product={product} onClose={() => product(null)} />
  }

  const handleDelete = (e) => 
  {
    e.stopPropagation();

    MySwal.fire({
      title: "¿Deseas eliminar este product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(null);
        MySwal.fire({
          icon: 'success',
          title: 'Eliminado con éxito!',
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
      }
    });
  };

  return (
  <>
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-img" />
        <span className="product-name">{product.name}</span>
        <span className="product-stock">{product.stock}</span>
        <span className="product-price">${product.price.toFixed(2)}</span>
        <span className="product-category">{product.category}</span>

        <div className="products-buttons">
          <button id="discount-btn" onClick={handleDiscount}><i className="fa-solid fa-percent"></i></button>
          <button id="delete-btn" onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
          <button id="edit-btn"><i className="fa-solid fa-pen"></i></button>
        </div>
      </div>
  </>
  );
}

export default CardAdminProducts;
