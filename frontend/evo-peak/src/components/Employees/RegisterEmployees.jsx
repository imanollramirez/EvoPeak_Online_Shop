import React, { useState, useEffect } from "react";

const RegisterEmployees = ({ onSave, onCancel, onUpdate, employee }) => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [dui, setDui] = useState("");
  const [salary, setSalary] = useState("");
  const [isss, setIsss] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name || "");
      setLastname(employee.lastName || "");
      setPhone(employee.phone || "");
      setDui(employee.dui || "");
      setSalary(employee.salary || "");
      setIsss(employee.isss || "");
      setImagePreview(employee.profilePic || "");
      setProfilePic(null); // resetear a null para permitir nueva carga si es necesario
    }
  }, [employee]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!name || !lastName || !phone || !dui || !salary || !isss || (!profilePic && !imagePreview)) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!/^\d{8}$/.test(phone)) {
      alert("El número de teléfono debe tener exactamente 8 dígitos.");
      return;
    }

    if (!/^\d{9}$/.test(dui)) {
      alert("El DUI debe tener exactamente 9 dígitos.");
      return;
    }

    if (!/^\d+$/.test(salary) || !/^\d+$/.test(isss)) {
      alert("El salario e ISSS deben ser números válidos.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("phone", phone);
    formData.append("dui", dui);
    formData.append("salary", salary);
    formData.append("isss", isss);
    
    // Si se ha seleccionado una nueva imagen, usa esa. Si no, usa la URL existente.
    if (profilePic) {
      formData.append("profilePic", profilePic);
    } else {
      formData.append("profilePicUrl", imagePreview); // campo alternativo si solo es una URL
    }

    if (employee) {
      onUpdate(formData, employee._id);
    } else {
      onSave(formData);
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

      <label>Imagen:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="form-control m-3"
      />

      {imagePreview && (
        <div className="image-preview m-3">
          <img
            src={imagePreview}
            alt="Vista previa"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>
      )}

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
