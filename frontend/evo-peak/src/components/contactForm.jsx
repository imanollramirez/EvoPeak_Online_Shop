import React from "react";
import ImageContactUs from "../assets/contactUsItem.png";
import useDataContact from "./ContactUs/Hooks/useDataContactUs.jsx"


const ContactForm = () => {
  const {
    formData,
    handleChange,
    sendContactMessage,
    loading,
    successMsg,
    errorMsg
  } = useDataContact();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContactMessage();
  };

  return (
    <div className="form-content-wrapper">
      <div className="form-and-image">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="form-group">
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleChange}
                placeholder="Nombres"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                placeholder="Apellidos"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Correo Electrónico"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              placeholder="Escribe aquí tu duda o mensaje"
              required
            />
          </div>

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {successMsg && <p className="success-msg">{successMsg}</p>}
          {errorMsg && <p className="error-msg">{errorMsg}</p>}
        </form>

        <div className="image-container">
          <img src={ImageContactUs} alt="Imagen de contacto" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
