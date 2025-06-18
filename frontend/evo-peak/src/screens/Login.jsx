import upper_shape from "../assets/Upper_Shape.png";
import lower_shape from "../assets/Lower_Shape.png";
import logo from "../assets/EvoPeak_Black.png";
import "../screens/Login.css";

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext" 
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const success = await login(email, password);
    if (!success) {
      alert("Credenciales incorrectas.");
      return;
    }

    MySwal.fire({
            icon: "success",
            title: "Sesión iniciada con éxito",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });
    navigate("/welcome");
  };

  useEffect(() => {
    const miCookie = localStorage.getItem("authToken");
    console.log(miCookie, "cookie desde el login useEffect");
  }, []);

  return (
    <>
      <img
        src={upper_shape}
        className="absolute top-0 left-0 w-full h-auto"
        alt="Upper Shape"
      />
      <a href="/">
        <img
          src={logo}
          width={220}
          className="logo position-absolute top-0 start-50 translate-middle"
          alt="Logo"
        />
      </a>

      <h1 className="title-login text-center position-absolute top-0 start-50 translate-middle-x">
        Inicio de Sesión
      </h1>

      <div className="box position-absolute top-50 start-50 translate-middle">
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-container">
            <p className="text-start mt-4">Usuario:</p>
            <input
              type="text"
              className="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <p className="text-start mt-4">Contraseña:</p>
            <input
              type="password"
              className="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <a href="/recoverPassword" className="recoverPass">
            <p className="text-end mt-3">Olvidé mi contraseña</p>
          </a>

          <button type="submit" className="login mt-5">
            Iniciar Sesión
          </button>

          <button
            type="button"
            className="register mt-3"
            onClick={() => navigate("/register")}
          >
            Registrarse
          </button>
        </form>
      </div>

      <img
        src={lower_shape}
        className="rec-login position-absolute bottom-0 end-0"
        alt="Lower Shape"
      />
    </>
  );
};

export default Login;
