import { useState, useEffect } from "react";

const API_URL = "http://localhost:4000/api/costumers";

const useDataCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // Mensajes de estado

  // Obtener todos los customers
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setMessage("Error al obtener clientes.");
    }
    setLoading(false);
  };

  // Crear customer
  const createCustomer = async (customer) => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("¡Registro exitoso!");
        fetchCustomers();
      } else {
        setMessage(data.message || "Error al registrar cliente.");
      }
    } catch (error) {
      setMessage("Error de conexión.");
    }
    setLoading(false);
  };

  // Actualizar customer
  const updateCustomer = async (id, customer) => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Cliente actualizado correctamente.");
        fetchCustomers();
      } else {
        setMessage(data.message || "Error al actualizar cliente.");
      }
    } catch (error) {
      setMessage("Error de conexión.");
    }
    setLoading(false);
  };

  // Eliminar customer
  const deleteCustomer = async (id) => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessage("Cliente eliminado correctamente.");
        fetchCustomers();
      } else {
        setMessage("Error al eliminar cliente.");
      }
    } catch (error) {
      setMessage("Error de conexión.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return {
    customers,
    loading,
    message,
    setMessage,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    fetchCustomers,
  };
};

export default useDataCustomers;
