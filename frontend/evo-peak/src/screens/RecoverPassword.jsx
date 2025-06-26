import { useState } from "react";
import upper_shape from "../assets/Upper_Shape.png";
import lower_shape from "../assets/Lower_Shape.png";
import logo from "../assets/EvoPeak_Black.png";
import "../screens/RecoverPassword.css";
import MySwal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const sendCode = async (e) => {
    e.preventDefault();
    if (!email) return MySwal.fire({
      icon: "error",
      title: "Complete todos los campos!",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    const res = await fetch("http://localhost:4000/api/recoveryPassword/requestCode", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (res.ok) MySwal.fire({
      icon: "success",
      title: "Se envió el código",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    else MySwal.fire({
      icon: "error",
      title: data.message,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  };

  const verifyCode = async (e) => {
    e.preventDefault();
    if (!code) return MySwal.fire({
      icon: "error",
      title: "Ingrese el código",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });

    const res = await fetch("http://localhost:4000/api/recoveryPassword/verifyCode", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    if (res.ok) MySwal.fire({
      icon: "success",
      title: "Se verificó el código",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
    else MySwal.fire({
      icon: "error",
      title: data.message,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  };

  const setPassword = async (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) return MySwal.fire({
      icon: "error",
      title: "Complete los campos",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    if (newPassword !== confirmPassword) return MySwal.fire({
      icon: "error",
      title: "Las contraseñas no coinciden",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    const res = await fetch("http://localhost:4000/api/recoveryPassword/newPassword", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
    });

    const data = await res.json();
    if (res.ok)
      {
        MySwal.fire({
          icon: "success",
          title: "Se restableció la contraseña",
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true
        });
        navigate("/Login");
      } 
        
    else
    {
      MySwal.fire({
        icon: "error",
        title: data.message || "Error",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
    } 
  };

  return (
    <>
      <img src={upper_shape} className="absolute top-0 left-0 w-full h-auto" />
      <a href="/"><img src={logo} width={220} className="logo position-absolute top-0 start-50 translate-middle" /></a>
      <h1 className="text-center position-absolute top-0 start-50 translate-middle-x">Recuperación de contraseña</h1>

      <div className="box-recovery position-absolute top-50 start-0 translate-middle-y" id="left">
        <p className="text-center">Ingrese su correo e ingrese el código de verificación para continuar con el proceso.</p>
        <form className="form">
          <div className="input-container">
            <p className="text-start mt-4">Correo Electrónico:</p>
            <input type="email" className="email" value={email} onChange={e => setEmail(e.target.value)} />
            <button className="newPassword w-auto mt-5" onClick={sendCode}>Enviar código</button>
          </div>
          <div className="input-container">
            <p className="text-start mt-4">Código de verificación:</p>
            <input type="text" className="verificationCode" value={code} onChange={e => setCode(e.target.value)} />
          </div>
          <button type="button" className="verificateCode mt-5" onClick={verifyCode}>Verificar</button>
        </form>
      </div>

      <div className="box-recovery position-absolute top-50 end-0 translate-middle-y" id="right">
        <form className="form" onSubmit={setPassword}>
          <div className="input-container">
            <p className="text-center">Ingrese su nueva contraseña.</p>
            <p className="text-start mt-4">Nueva contraseña:</p>
            <input type="password" className="setNewPassword" required value={newPassword} onChange={e => setNewPassword(e.target.value)} />
          </div>
          <div className="input-container">
            <p className="text-start mt-4">Confirmar contraseña:</p>
            <input type="password" className="setNewPassword" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </div>
          <button type="submit" className="newPassword mt-5">Confirmar</button>
        </form>
      </div>

      <img src={lower_shape} className="rec position-absolute bottom-0 end-0" />
    </>
  );
};

export default RecoverPassword;

