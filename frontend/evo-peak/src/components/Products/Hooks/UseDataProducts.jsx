import { useEffect, useState } from "react";

const useDataProducts = () => {

  const API = "http://localhost:4000/api/products";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [idCategory, setidCategory] = useState("");
  const [image, setImage] = useState("");
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
  }, [products]);

  const saveProducts = async (productData) => {
    if (
      !productData.name ||
      !productData.stock ||
      !productData.price ||
      !productData.idCategory ||
      !productData.image
    ) {
      return;
    }

    const formData = new FormData();

  formData.append("name", productData.name),
  formData.append("stock",productData.stock,),
  formData.append("price",productData.price),
  formData.append("idCategory", productData.idCategory),
  formData.append("image",productData.image);
  
    try {

      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("An error occurred");
      }

       await response.json();
      fetchProducts();
      // Limpiar campos
      setName("");
      setStock(0);
      setPrice(0);
      setidCategory("");
      setImage("");
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
      !updatedData.id ||
      !updatedData.name ||
      !updatedData.stock ||
      !updatedData.price ||
      !updatedData.idCategory ||
      !updatedData.image
    ) {
      return;
    }

    const formData = new FormData();
    formData.append("name", updatedData.name);
    formData.append("stock", updatedData.stock);
    formData.append("price", updatedData.price);
    formData.append("idCategory", updatedData.idCategory); 
    formData.append("image", updatedData.image); 

    try {

      const response = await fetch(`${API}/${updatedData.id}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("An error ocurred");
      }

      await response.json();
      fetchProducts();

      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    id, setId,
    name, setName,
    stock, setStock,
    price, setPrice,
    idCategory, setidCategory,
    image, setImage,
    products, setProducts,
    fetchProducts,
    saveProducts,
    deleteProducts,
    updateProducts,
  };
};

export default useDataProducts;
