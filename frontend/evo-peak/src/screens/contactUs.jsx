import React from "react";
import "./contactUs.css";
import Rectangle_1 from "../assets/Rectangle_paymentProcess_1.png";
import Rectangle_3 from "../assets/Rectangle_paymentProcess_3.png";
import ContactForm from "../components/contactForm.jsx";

const ContactUs = () => {
  return (
    <div className="contact-page-container">
      <img src={Rectangle_1} className="position-absolute top-50 start-0 translate-middle-y" />
      <img src={Rectangle_3} className="position-absolute top-50 end-0 translate-middle-y" />

      <div className="main-container">
        <h1 className="title-contact">CONTÁCTANOS</h1>
        <div className="contact-container">
          <div className="contact-header">
            <h1>COMPLETA LOS CAMPOS</h1>
            <div className="contact-description">
              <p>Escribe tu duda o pregunta y nuestro equipo con gusto responderá a ella.</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
