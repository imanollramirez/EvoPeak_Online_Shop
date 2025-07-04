import Derecho from "../../assets/Rectangle 474.png";
import Izquierdo from "../../assets/Rectangle 475.png";
import "./ProductsAdmin.css"; // tu CSS original

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useDataProducts from "../../components/Products/Hooks/UseDataProducts.jsx"
import ListProducts from "../../components/Products/ListProducts.jsx";
import RegisterProducts from "../../components/Products/RegisterProducts.jsx";

import UseDataCategories from "../../components/Categories/Hooks/useDataCategories.jsx"
import ListCategories from "../../components/Categories/ListCategories.jsx";

const MySwal = withReactContent(Swal);

const ProductsAdmin = () => {
  
  const {  products, updateProducts,deleteProducts,saveProducts} = useDataProducts();
  const { categories, updateCategories, deleteCategories, saveCategories} = UseDataCategories();

const AddNewCategory = (e) => {
  e.stopPropagation();

  MySwal.fire({
    title: "Agregar Categoría",
    html: `
      <input id="swal-input1" class="swal2-input" placeholder="Nombre">
      <input id="swal-input2" class="swal2-input" placeholder="Descripción">
      <br/>
      <button id="open-categories" class="swal2-confirm">Ver <i class="fa-solid fa-eye"></i></button>
    `,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Agregar",
    didOpen: () => {
      const openBtn = document.getElementById("open-categories");
      if (openBtn) {
        openBtn.addEventListener("click", () => {
          MySwal.fire({
            title: "Lista de Categorías",
            html: (
              <ListCategories
              categories={categories}
              deleteCategories={deleteCategories}
              updateCategories={updateCategories}
              />
            ),
            confirmButtonText: "Cerrar",
          });
        });
      }
    },
    preConfirm: () => {
      const name = document.getElementById("swal-input1").value.trim();
      const description = document.getElementById("swal-input2").value.trim();
      if (!name || !description) {
        Swal.showValidationMessage("Por favor, completa todos los campos");
      }
      return { name, description };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { name, description } = result.value;

      saveCategories({
        name,
        description
      });

      MySwal.fire({
        icon: 'success',
        title: 'Categoría agregada con éxito!',
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    }
  });
};

const AddNewProduct = (e) => {
  e.stopPropagation();

  MySwal.fire({
    title: "Agregar productos",
    html: (
      <RegisterProducts
      categories={categories}
        onSave={(data) => {
          saveProducts(data);
          MySwal.fire({
            icon: "success",
            title: "Se agregó con éxito!",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
        }}
        onCancel={() => MySwal.close()}
      />
    ),
    showCancelButton: false,
    showConfirmButton: false,
  });
};


  return (
    <div className="product-page-container">
      <img src={Izquierdo} className="triangulo-izquierdo" alt="Triángulo Izquierdo" />
      <img src={Derecho} className="triangulo-derecho" alt="Triángulo Derecho" />

      {/* Aplica desenfoque cuando el modal está abierto */}
      <div className='product-page'>
        <div className="product-header">
          <h1>Productos</h1>
          <button className="add-btn-product" onClick={AddNewProduct} style={{width:"180px "}}>Producto <i className="fa-solid fa-square-plus text-light ms-2"></i></button>
          <button className="add-btn-category" onClick={AddNewCategory} style={{width:"180px "}}>Categoría <i className="fa-solid fa-square-plus text-light ms-2"></i></button>
        </div>
        <div className="product-table-header">
          <span className="text-light">Foto</span>
          <span>Nombre</span>
          <span>Stock</span>
          <span>Precio</span>
          <span>Categoría</span>
        </div>

        <ListProducts
                  products={products}
                  categories={categories}
                  deleteProducts={deleteProducts}
                  updateProducts={updateProducts}
        />
      </div>
    </div>

    
  );

  
}

export default ProductsAdmin;