import { useEffect, useState } from "react";

const useDataEmployees = () => {

  const API = "http://localhost:4000/api/employees";

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
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

  const saveEmployee = async (employeeData) => {
    if (
      !employeeData.name ||
      !employeeData.lastname ||
      !employeeData.phone ||
      !employeeData.dui ||
      !employeeData.salary ||
      !employeeData.isss ||
      !employeeData.profilePic
    ) {
      return;
    }

    const newEmployee = {
      name: employeeData.name,
      lastname: employeeData.lastname,
      phone: employeeData.phone,
      dui: employeeData.dui,
      salary: employeeData.salary,
      isss: employeeData.isss,
      profilePic: employeeData.profilePic,
    };

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) throw new Error("Error saving employee");

      fetchEmployees();
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
      !updatedData.lastname ||
      !updatedData.phone ||
      !updatedData.dui ||
      !updatedData.salary ||
      !updatedData.isss ||
      !updatedData.profilePic
    ) {
      return;
    }

    const updatedEmployee = {
      name: updatedData.name,
      lastname: updatedData.lastname,
      phone: updatedData.phone,
      dui: updatedData.dui,
      salary: updatedData.salary,
      isss: updatedData.isss,
      profilePic: updatedData.profilePic,
    };

    try {
      const response = await fetch(`${API}/${updatedData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
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
    lastname, setLastname,
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
