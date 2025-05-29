import React, { useState, useEffect } from "react";

const RegisterEmployees = ({ onSave, onCancel, onUpdate, employee }) => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [dui, setDui] = useState("");
  const [salary, setSalary] = useState("");
  const [isss, setIsss] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name || "");
      setLastname(employee.lastName || "");
      setPhone(employee.phone || "");
      setDui(employee.dui || "");
      setSalary(employee.salary || "");
      setIsss(employee.isss || "");
      setProfilePic(employee.profilePic || "");
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones de los campos
    if (!name || !lastName || !phone || !dui || !salary || !isss || !profilePic) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validación del teléfono
    if (!/^\d{8}$/.test(phone)) {
      alert("El número de teléfono debe tener exactamente 8 dígitos.");
      return;
    }

    // Validación del DUI
    if (!/^\d{9}$/.test(dui)) {
      alert("El DUI debe tener exactamente 9 dígitos.");
      return;
    }

    // Validación de salario y ISSS
    if (!/^\d+$/.test(salary) || !/^\d+$/.test(isss)) {
      alert("El salario e ISSS deben ser números válidos.");
      return;
    }

    const employeeData = { name, lastName, phone, dui, salary, isss, profilePic };

    // Si hay un `employee`, es una actualización
    if (employee) {
      onUpdate(employeeData, employee._id); // Actualizar con ID del empleado
    } else {
      onSave(employeeData); // Guardar nuevo empleado
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center">
      <label>Nombre:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="swal2-input m-3" required />

      <label>Apellido:</label>
      <input type="text" value={lastName} onChange={(e) => setLastname(e.target.value)} className="swal2-input m-3" required />

      <label>Teléfono:</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="swal2-input m-3" required />

      <label>DUI:</label>
      <input type="text" value={dui} onChange={(e) => setDui(e.target.value)} className="swal2-input m-3" required />

      <label>Salario:</label>
      <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="swal2-input m-3" required />

      <label>ISSS:</label>
      <input type="number" value={isss} onChange={(e) => setIsss(e.target.value)} className="swal2-input m-3" required />

      <label>Foto de perfil (URL):</label>
      <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} className="swal2-input m-3" required />

      <button type="submit" className="swal2-confirm swal2-styled m-3">
        {employee ? "Actualizar" : "Guardar"}
      </button>

      <button type="button" className="swal2-cancel swal2-styled m-3" onClick={onCancel}>
        Cancelar
      </button>
    </form>
  );
};

export default RegisterEmployees;
