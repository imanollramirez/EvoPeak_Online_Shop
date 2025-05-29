import React, { useState } from "react";

const RegisterProducts = ({ onSave, onCancel, onUpdate, product }) => {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [idCategory, setIdCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product) {
      onUpdate({
        Name: name || product?.Name,
        Stock: stock !== "" ? parseInt(stock) : product?.Stock,
        Price: price !== "" ? parseFloat(price) : product?.Price,
        idCategory: idCategory || product?.idCategory,
        Image: image || product?.Image,
        id: product?._id,
      });
    } else {
      onSave({
        Name: name,
        Stock: parseInt(stock),
        Price: parseFloat(price),
        idCategory,
        Image: image,
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
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="swal2-input m-3"
        placeholder="Nombre del producto"
        required
      />

      <label>Stock:</label>
      <input
        type="number"
        placeholder="Cantidad disponible"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="swal2-input m-3"
        required
      />

      <label>Precio:</label>
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="swal2-input m-3"
        required
      />

      <label>ID Categoría:</label>
      <input
        type="text"
        placeholder="ID de la categoría"
        value={idCategory}
        onChange={(e) => setIdCategory(e.target.value)}
        className="swal2-input m-3"
        required
      />

      <label>Imagen (URL):</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="swal2-input m-3"
        required
      />

      <button type="submit" className="swal2-confirm swal2-styled m-3">
        {product ? "Actualizar" : "Guardar"}
      </button>

      <button type="button" className="swal2-cancel swal2-styled m-3" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};

export default RegisterProducts;
