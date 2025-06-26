import { useState } from "react";
import MySwal from "sweetalert2";

const useDataContactUs = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    mensaje: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendContactMessage = async () => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        MySwal.fire({
        icon: "success",
        title: "Mensaje enviado con éxito!",
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
        setFormData({
          nombres: "",
          apellidos: "",
          correo: "",
          telefono: "",
          mensaje: ""
        });
      } else {
        setErrorMsg(data.message || "Error al enviar el mensaje.");
      }
    } catch (error) {
      setErrorMsg("Error de conexión con el servidor.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    sendContactMessage,
    loading,
    successMsg,
    errorMsg
  };
};

export default useDataContactUs;
