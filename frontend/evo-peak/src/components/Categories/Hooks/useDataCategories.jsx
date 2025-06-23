import { useState, useEffect } from "react";

const useDataCategories = () => {
  const API = "http://localhost:4000/api/categories";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  // Obtener todas las categorías
  const fetchCategories = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Error al obtener las categorías");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Guardar una nueva categoría
  const saveCategories = async (categoryData) => {
    if (!categoryData.name || !categoryData.description) {
      console.error("Faltan datos para guardar la categoría");
      return;
    }

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryData),
      });

      if (!response.ok) {
        throw new Error("Error al guardar la categoría");
      }

      await response.json();
      fetchCategories();
      // Limpiar campos
      setName("");
      setDescription("");
      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  // Eliminar una categoría
  const deleteCategories = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la categoría");
      }

      await response.json();
      fetchCategories();
    } catch (error) {
      console.error(error);
    }
  };

  // Actualizar una categoría
  const updateCategories = async (updatedData) => {
    if (!updatedData.id || !updatedData.name || !updatedData.description) {
  
      return;
    }

    const categoryUpdated = {
      name: updatedData.name,
      description: updatedData.description
    };


    try {
      const response = await fetch(`${API}/${updatedData.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(categoryUpdated),
      });

      await response.json();
      fetchCategories();

    } catch (error) {
      console.error(error);
    }
  };

  return {
    id, setId,
    name, setName,
    description, setDescription,
    categories, setCategories,
    fetchCategories,
    saveCategories,
    deleteCategories,
    updateCategories,
  };
};

export default useDataCategories;
