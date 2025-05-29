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
  }, [employees]);

  const saveEmployee = async (employeeData) => {
    if (
      !employeeData.name ||
      !employeeData.lastName ||
      !employeeData.phone ||
      !employeeData.dui ||
      !employeeData.salary ||
      !employeeData.isss ||
      !employeeData.profilePic
    ) {
      return;
    }
  
    try {
      console.log(employeeData.name)
      const formData = new FormData();
      formData.append("name", employeeData.name);
  formData.append("lastName", employeeData.lastName);
  formData.append("phone", employeeData.phone);
  formData.append("dui", employeeData.dui);
  formData.append("salary", employeeData.salary);
  formData.append("isss", employeeData.isss);
  formData.append("profilePic", employeeData.profilePic);

      const response = await fetch(API, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) throw new Error("Error saving employee");
  
      await response.json();
      fetchEmployees();
      // Limpiar los campos después de guardar
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
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Error deleting employee");

      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmployee = async (updatedData) => {
    if (
      !updatedData.name ||
      !updatedData.lastName ||
      !updatedData.phone ||
      !updatedData.dui ||
      !updatedData.salary ||
      !updatedData.isss ||
      !updatedData.profilePic
    ) {
      return;
    }

    
    try {
      const formUpdated = new FormData();
      formUpdated.append(updatedData.name);
      formUpdated.append(updatedData.lastName);
      formUpdated.append(updatedData.phone);
      formUpdated.append(updatedData.dui);
      formUpdated.append(updatedData.salary);
      formUpdated.append(updatedData.isss);
      formUpdated.append(updatedData.profilePic);

      const response = await fetch(`${API}/${updatedData.id}`, {
        method: "PUT",
        body: formUpdated,
      });

      if (!response.ok) throw new Error("Error updating employee");

      fetchEmployees();
      setId("");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    id, setId,
    name, setName,
    lastName, setLastname,
    phone, setPhone,
    dui, setDui,
    salary, setSalary,
    isss, setIsss,
    profilePic, setProfilePic,
    employees, setEmployees,
    fetchEmployees,
    saveEmployee,
    deleteEmployee,
    updateEmployee,
  };
};

export default useDataEmployees;
