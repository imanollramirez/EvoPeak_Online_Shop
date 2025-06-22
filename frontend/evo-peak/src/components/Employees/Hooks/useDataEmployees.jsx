import { useEffect, useState } from "react";

const useDataEmployees = () => {
  const API = "http://localhost:4000/api/employees";

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
    fetchEmployees();
  }, []);

  const saveEmployee = async (formData) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Error saving employee");

      const newEmployee = await response.json();

      // Actualizar el estado añadiendo el nuevo empleado
      setEmployees((prev) => [...prev, newEmployee]);

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

      setEmployees((prev) => prev.filter((emp) => emp._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmployee = async (formData, employeeId) => {
    try {
      const response = await fetch(`${API}/${employeeId}`, {
        method: "PUT",
        body: formData,
      });

      if (!response.ok) throw new Error("Error updating employee");

      const updatedEmployee = await response.json();

      // Actualizar el estado reemplazando el empleado editado
      setEmployees((prev) =>
        prev.map((emp) => (emp._id === employeeId ? updatedEmployee : emp))
      );

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
