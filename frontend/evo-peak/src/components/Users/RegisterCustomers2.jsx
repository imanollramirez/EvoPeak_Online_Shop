// src/Customers/RegisterCustomer.jsx
import React, { useState, useEffect } from "react";

const RegisterCustomer = ({ customer = {}, onUpdate, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    direction: "",
    profilePic: ""
  });

  useEffect(() => {
    if (customer && Object.keys(customer).length > 0) {
      setForm(customer);
    }
  }, [customer]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(onUpdate) onUpdate(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "100%" }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Apellido" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Teléfono" required />
      <input name="direction" value={form.direction} onChange={handleChange} placeholder="Dirección" required />
      <input type="file" accept="image/*" onChange={handleImage} />
      {form.profilePic && <img src={form.profilePic} alt="Preview" style={{ maxWidth: 100, borderRadius: "50%" }} />}
      <div style={{ marginTop: 10 }}>
        <button type="submit">Guardar</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancelar</button>}
      </div>
    </form>
  );
};

export default RegisterCustomer;
