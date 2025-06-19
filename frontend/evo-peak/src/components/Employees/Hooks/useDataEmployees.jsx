import { useEffect, useState } from "react";

const useDataEmployees = () => {
  const API = "http://localhost:4000/api/employees";

  // Estados para formulario (puedes mantener o eliminar si solo usas FormData)
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [dui, setDui] = useState("");
  const [salary, setSalary] = useState(0);
  const [isss, setIsss] = useState(0);
  const [profilePic, setProfilePic] = useState("");

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("Error fetching employees");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Solo ejecutar una vez al montar el componente
    fetchEmployees();
  }, []);

  const saveEmployee = async (formData) => {
    // formData es un FormData, no se debe usar JSON.stringify ni headers Content-Type explícito
    try {
      const response = await fetch(API, {
        method: "POST",
        body: formData,
        // NO agregar headers Content-Type, el navegador lo pone automáticamente para FormData
      });

      if (!response.ok) throw new Error("Error saving employee");

      await response.json();
      fetchEmployees();

      // Limpiar campos si los usas
      setName("");
      setLastname("");
      setPhone("");
      setDui("");
      setSalary(0);
      setIsss(0);
      setProfilePic("");
      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error deleting employee");

      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmployee = async (formData, employeeId) => {
    try {
      const response = await fetch(`${API}/${employeeId}`, {
        method: "PUT",
        body: formData,
        // Igual que saveEmployee, no hay que poner headers Content-Type
      });

      if (!response.ok) throw new Error("Error updating employee");

      await response.json();
      fetchEmployees();

      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    id,
    setId,
    name,
    setName,
    lastName,
    setLastname,
    phone,
    setPhone,
    dui,
    setDui,
    salary,
    setSalary,
    isss,
    setIsss,
    profilePic,
    setProfilePic,
    employees,
    setEmployees,
    fetchEmployees,
    saveEmployee,
    deleteEmployee,
    updateEmployee,
  };
};

export default useDataEmployees;
