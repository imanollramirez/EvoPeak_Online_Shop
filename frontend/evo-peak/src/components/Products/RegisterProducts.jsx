import React, { useState } from "react";

const RegisterProducts = ({ onSave, onCancel, onUpdate, product }) => {
  
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

     if (product) {
      onUpdate({
        name: name || product?.Name,
        stock: stock || product?.Stock,
        price: price || product?.Price,
        idCategory: idCategory || product?.idCategory,
        image: image || imagePreview,
        id: product?._id,
      });
    } else {
      onSave({
        name,
        stock,
        price,
        idCategory,
        image
      });
    }

  };
  return (
     <form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <label>Nombre del producto:</label>
      <input
        type="text"
        value={name || product?.Name}
        onChange={(e) => setName(e.target.value)}
        className="swal2-input m-3"
        placeholder="Nombre del producto"
        required
      />

      <label>Stock:</label>
      <input
        type="number"
        placeholder="Cantidad disponible"
        value={stock || product?.Stock}
        onChange={(e) => setStock(e.target.value)}
        className="swal2-input m-3"
        required
      />

      <label>Precio:</label>
      <input
        type="number"
        placeholder="Precio"
        value={price || product?.Price}
        onChange={(e) => setPrice(e.target.value)}
        className="swal2-input m-3"
        required
      />

      <label>ID Categoría:</label>
      <input
        type="text"
        placeholder="ID de la categoría"
        value={idCategory || product?.idCategory}
        onChange={(e) => setIdCategory(e.target.value)}
        className="swal2-input m-3"
        required
      />

    
        <label>Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange || product?.Image}
        className="form-control m-3"
      />
        <div className="image-preview m-3">
          <img src={imagePreview || product?.Image} style={{ width: "150px", height: "150px", objectFit: "cover" }} />
        </div>

      <button type="submit" className="swal2-confirm swal2-styled m-3">
        {(onSave) ? "Guardar" : "Actualizar"}
      </button>

      <button type="button" className="swal2-cancel swal2-styled m-3" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};

export default RegisterProducts;
