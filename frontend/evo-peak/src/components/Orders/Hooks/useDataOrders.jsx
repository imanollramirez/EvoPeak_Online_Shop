import { useEffect, useState } from "react";

const useDataOrders = () => {
    const API = "http://localhost:4000/api/orders";

  const [id, setId] = useState("");
  const [idCostumers, setIdCostumers] = useState("");
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState("");
  const [orders, setOrders] = useState([]);

  // GET ALL
  const fetchOrders = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("Error al obtener órdenes");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  // CREATE
  const saveOrders = async (orderData) => {
    if (
      !orderData.idCostumers ||
      !orderData.products?.length ||
      !orderData.total ||
      !orderData.status
    ) return;

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Error al crear orden");

      await response.json();
      fetchOrders();
      clearForm();
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE
  const deleteOrders = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar orden");

      fetchOrders();
    } catch (error) {
      console.error(error);
    }
  };

  // UPDATE
  const updateOrders = async (updatedData) => {
    if (
      !updatedData.id ||
      !updatedData.idCostumers ||
      !updatedData.products?.length ||
      !updatedData.total ||
      !updatedData.status
    ) return;

    try {
      const response = await fetch(`${API}/${updatedData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error("Error al actualizar orden");

      await response.json();
      fetchOrders();
      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  // Limpiar estados
  const clearForm = () => {
    setId("");
    setIdCostumers("");
    setProducts([]);
    setTotal(0);
    setStatus("");
  };

  // useEffect para cargar órdenes
  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    // estados de formulario
    id, setId,
    idCostumers, setIdCostumers,
    products, setProducts,
    total, setTotal,
    status, setStatus,

    // datos y funciones
    orders, setOrders,
    fetchOrders,
    saveOrders,
    deleteOrders,
    updateOrders,
    clearForm,
  };
};

export default useDataOrders;
