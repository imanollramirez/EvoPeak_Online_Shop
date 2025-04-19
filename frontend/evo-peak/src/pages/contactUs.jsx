import React from 'react';
import './contactUs.css'; 
import ImageContactUs from "../assets/contactUsItem.png"

const ContactUs = () => {
    return (
       <div className='contact-page-container'>
        <div className='main-container'>
         <h1 className='title-contact'>CONTÁCTANOS</h1>
         <div className="contact-container">
           
          <div className="contact-header">
            <h1>COMPLETA LOS CAMPOS</h1>
            <div className="contact-description">
              <p>Escribe tu duda o pregunta y nuestro equipo con gusto responderá a ella.</p>
            </div>
          </div>

          <div className='form-content-wrapper'> 
            <div className='form-and-image'>
              <form className="contact-form">
                <div className="name-fields">
                  <div className="form-group">
                    <input type="text" id="nombres" name="nombres" placeholder="Nombres" />
                  </div>
          
                  <div className="form-group">
                    <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" />
                  </div>
                </div>
          
                <div className="form-group">
                  <input type="email" id="correo" name="correo" placeholder="Correo Electrónico" />
                </div>
          
                <div className="form-group">
                  <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" />
                </div>
          
                <div className="form-group">
                  <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe aquí tu duda o mensaje"></textarea>
                </div>
          
                <button type="submit" className="submit-button">Enviar</button>
              </form>

              <div className="image-container">
                <img src={ImageContactUs} alt="Imagen de contacto" />
              </div>
            </div>
          </div>
        </div>
       </div>
       </div>
    );
};

export default ContactUs;