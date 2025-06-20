// src/Customers/RegisterCustomer.jsx
import React, { useState, useEffect } from "react";

const RegisterCustomer = ({ customer = {}, onUpdate, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    dui: "",
    profilePic: ""
  });

  const [imagePreview, setImagePreview] = useState(customer?.image || "");

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
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(onUpdate) onUpdate(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "100%" }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required className="swal2-input m-2"/>
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Apellido" required className="swal2-input m-2"/>
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="swal2-input m-2"/>
      <input name="phone" type="number" maxLength="8" value={form.phone} onChange={handleChange} placeholder="Teléfono" required className="swal2-input m-2"/>
      <input name="dui" type="number" maxLength="10"  value={form.dui} onChange={handleChange} placeholder="Dui" required className="swal2-input m-2"/>
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        className="form-control m-3"
      />
      <div className="image-preview m-3">
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Vista previa"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        )}
      </div>
      <div style={{ marginTop: 10 }}>
        <button type="submit" className="swal2-confirm swal2-styled m-3">Guardar</button>
        {onCancel && <button type="button" onClick={onCancel} className="swal2-cancel swal2-styled m-3">Cancelar</button>}
      </div>
    </form>
  );
};

export default RegisterCustomer;
