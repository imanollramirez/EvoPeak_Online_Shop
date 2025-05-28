import { useEffect, useState } from "react";

const useDataProducts = () => {

  const API = "http://localhost:4000/api/products";
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [idCategoria, setIdCategoria] = useState("");
  const [imagen, setImagen] = useState("");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("An error occurred!");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const saveProducts = async (productData) => {
    if (
      !productData.nombre ||
      !productData.stock ||
      !productData.precio ||
      !productData.idCategoria ||
      !productData.imagen
    ) {
      return;
    }

    const newProduct = {
      Nombre: productData.nombre,
      Stock: productData.stock,
      Precio: productData.precio,
      idCategoria: productData.idCategoria,
      Imagen: productData.imagen
    };

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) {
        throw new Error("An error occurred");
      }

      fetchProducts();
      // Limpiar campos
      setNombre("");
      setStock(0);
      setPrecio(0);
      setIdCategoria("");
      setImagen("");
      setId("");
    } catch (error) {
      console.error(error)
    }
  };

  const deleteProducts = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("An error occurred");
      }

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const updateProducts = async (updatedData) => {
    if (
      !updatedData.nombre ||
      !updatedData.stock ||
      !updatedData.precio ||
      !updatedData.idCategoria ||
      !updatedData.imagen
    ) {
      return;
    }

    const updatedProduct = {
      Nombre: updatedData.nombre,
      Stock: updatedData.stock,
      Precio: updatedData.precio,
      idCategoria: updatedData.idCategoria,
      Imagen: updatedData.imagen
    };

    try {
      const response = await fetch(`${API}/${updatedData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) {
        throw new Error("An error occurred");
      }

      fetchProducts();
      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    id, setId,
    nombre, setNombre,
    stock, setStock,
    precio, setPrecio,
    idCategoria, setIdCategoria,
    imagen, setImagen,
    products, setProducts,
    fetchProducts,
    saveProducts,
    deleteProducts,
    updateProducts,
  };
};

export default useDataProducts;
