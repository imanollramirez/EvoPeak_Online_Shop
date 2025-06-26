import React, { useState } from "react";
import upper_shape from "../assets/Upper_Shape.png";
import lower_shape from "../assets/Lower_Shape.png";
import logo from "../assets/EvoPeak_Black.png";
import "../screens/Register.css";
import useDataCustomers from "../components/Users/Hooks/useDataCustomers";

import MySwal from "sweetalert2";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    lastName: "",
    name: "",
    phone: "",
    password: "",
    dui: "",
    profilePic: null
  });
  const [preview, setPreview] = useState(null);

  // Importa las funciones y estados del hook
  const { registerCostumer, loading } = useDataCustomers();


  // Actualiza el estado del formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Maneja la carga y preview de la imagen
  const handleImage = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      
      const file = e.target.files[0];
    if (file) {
      setForm({ ...form, profilePic: file });
      setPreview(URL.createObjectURL(file));
    }
  };
  };

  // Envía el formulario al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (
      !form.name ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.dui ||
      !form.profilePic
    ) {
      MySwal.fire({
        icon: "error",
        title: "Complete los campos",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
    }
    else 
    {   
    await registerCostumer(form);
    }
  };

  return (
    <>
      <img src={upper_shape} className="absolute top-0 left-0 w-full h-auto" alt="upper shape" />
      <a href="/inicio">
        <img src={logo} width={220} className="logo position-absolute top-0 start-50 translate-middle" alt="logo" />
      </a>

      <h1 className="text-center position-absolute top-0 start-50 translate-middle-x">Registrarse</h1>
      <div className="box-register position-absolute top-50 start-50 translate-middle">
        <div className="form-register">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="input-container">
                  <p className="text-start mt-4">Nombres:</p>
                  <input
                    type="text"
                    placeholder="Nombre de usuario"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="input-container">
                  <p className="text-start mt-4">Apellidos:</p>
                  <input
                    type="text"
                    placeholder="Apellidos del usuario"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="input-container">
                  <p className="text-start mt-4">Email:</p>
                  <input
                    type="email"
                    placeholder="Correo Electrónico"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="input-container">
                  <p className="text-start mt-4">Teléfono:</p>
                  <input
                    type="text"
                    placeholder="Número de Teléfono"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-container">
                  <p className="text-start mt-4">Contraseña:</p>
                  <input
                    type="password"
                    placeholder="Minimo 8 carácteres"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="input-container">
                  <p className="text-start mt-4">DUI:</p>
                  <input
                    type="text"
                    placeholder="xxxxxxxx-x"
                    name="dui"
                    value={form.dui}
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="input-container">
  <p className="text-start mt-4">Foto de perfil:</p>

  {/* Vista previa de imagen si existe */}
  {preview && (
    <img src={preview} alt="Vista previa" className="profile-pic mb-3" />
  )}

  {/* Label que actúa como botón personalizado */}
  <label htmlFor="upload-pic" className="upload-pic">
    Seleccionar imagen
  </label>

  {/* Input oculto */}
  <input
    type="file"
    accept="image/*"
    onChange={handleImage}
    
    id="upload-pic"
    style={{ display: "none" }}
  />

  {/* Nombre del archivo seleccionado */}
  {form.profilePic && (
    <p className="mt-2">{form.profilePic.name}</p>
  )}
                </div>

              </div>
            </div>

            <div>
              <button type="submit" className="register mt-5" disabled={loading}>
                {loading ? "Registrando..." : "Registrarse"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <img src={lower_shape} className="position-absolute bottom-0 end-0" alt="lower shape" />
    </>
  );
};

export default Register;
