import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MySwal from "sweetalert2";

const API_URL = "http://localhost:4000/api";

const useDataCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // Mensajes de estado

  const navigate = useNavigate();

  // Obtener todos los customers
  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/costumers`);
      const data = await res.json();
      setCustomers(data);
    } catch (error) {
      console.error("Error fetching customers:", error);
      setMessage("Error al obtener clientes.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

 const registerCostumer = async (customer) => {
  setLoading(true);
  setMessage("");

  try {
    const res = await fetch(`${API_URL}/registerCostumer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    });

    const data = await res.json();
      if (res.ok) {
        MySwal.fire({
          icon: "success",
          title: "Registro exitoso",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        fetchCustomers();
        navigate("/Login")
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error);
    }
    setLoading(false);
};


  // Crear customer
  const createCustomer = async (customer) => {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${API_URL}/costumers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customer),
      });
      const data = await res.json();
      if (res.ok) {
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
      const res = await fetch(`${API_URL}/costumers/${id}`, {
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
      const res = await fetch(`${API_URL}/costumers/${id}`, {
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

  return {
    customers,
    loading,
    message,
    setMessage,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    fetchCustomers,
    registerCostumer
  };
};

export default useDataCustomers;
