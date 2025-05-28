import { useEffect, useState } from "react";

const useDataProducts = () => {

  const API = "http://localhost:4000/api/products";
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Stock, setStock] = useState(0);
  const [Price, setPrice] = useState(0);
  const [idCategory, setidCategory] = useState("");
  const [Image, setImage] = useState("");
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
      !productData.Name ||
      !productData.Stock ||
      !productData.Price ||
      !productData.idCategory ||
      !productData.Image
    ) {
      return;
    }

    const newProduct = {
      Name: productData.Name,
      Stock: productData.Stock,
      Price: productData.Price,
      idCategory: productData.idCategory,
      Image: productData.Image
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
      !updatedData.Name ||
      !updatedData.Stock ||
      !updatedData.Price ||
      !updatedData.idCategory ||
      !updatedData.Image
    ) {
      return;
    }

    const updatedProduct = {
      Name: updatedData.Name,
      Stock: updatedData.Stock,
      Price: updatedData.Price,
      idCategory: updatedData.idCategory,
      Image: updatedData.Image
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
    Name, setName,
    Stock, setStock,
    Price, setPrice,
    idCategory, setidCategory,
    Image, setImage,
    products, setProducts,
    fetchProducts,
    saveProducts,
    deleteProducts,
    updateProducts,
  };
};

export default useDataProducts;
