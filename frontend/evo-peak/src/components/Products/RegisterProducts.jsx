import React, { useState } from "react";

const RegisterProducts = ({ onSave, onCancel, onUpdate, product, categories }) => {

  const [name, setName] = useState(product?.name || "");
  const [stock, setStock] = useState(product?.stock || 0);
  const [price, setPrice] = useState(product?.price || 0);
  const [idCategory, setIdCategory] = useState(product?.idCategory._id);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(product?.image || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      name,
      stock,
      price,
      idCategory,
      image: image || imagePreview,
    };

    if (product) {
      productData.id = product._id;
      onUpdate(productData);
    } else {
      onSave(productData);
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

      <label>Categoría:</label>
      <select
        value={idCategory}
        onChange={(e) => setIdCategory(e.target.value)}
        className="swal2-input m-3"
        required
      >

        <option value="">Seleccione una categoría</option>
        {categories?.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}

      </select>



      <label>Imagen:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="form-control m-3"
      />

      <div className="image-preview m-3">
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Vista previa"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        )}
      </div>

      <div className="buttons d-flex">
        <button type="submit" className="swal2-confirm swal2-styled m-3">
          {product ? "Actualizar" : "Guardar"}
        </button>

        <button
          type="button"
          className="swal2-cancel swal2-styled m-3"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default RegisterProducts;
