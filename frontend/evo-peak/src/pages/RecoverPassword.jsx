import upper_shape from "../assets/Upper_Shape.png"
import lower_shape from "../assets/Lower_Shape.png"
import logo from "../assets/EvoPeak_Black.png"
import "../pages/RecoverPassword.css"

const RecoverPassword = () => {
    return (
     <>
     <img src={upper_shape} className="absolute top-0 left-0 w-full h-auto" />
     <a href="/"><img src={logo} width={220} className="logo position-absolute top-0 start-50 translate-middle"/></a>
    
     <h1 className="text-center position-absolute top-0 start-50 translate-middle-x">Recuperación de contraseña</h1>

     <div className="d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle w-100 ">
  <div className="box me-5">
    <p className="text-center">Ingrese su correo e ingrese el código de verificación para continuar con el proceso.</p>
    <form className="form">
      <div className="input-container">
        <p className="text-start mt-4">Correo Electrónico:</p>
        <input type="text" className="email" required />
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Código de verificación:</p>
        <input type="text" className="verificationCode" required />
      </div>
      <button type="submit" className="verificateCode mt-5">Verificar</button>
    </form>
  </div>

  <div className="box ms-5">
    <form className="form">
      <div className="input-container">
        <p className="text-center">Ingrese su nueva contraseña.</p>
        <p className="text-start mt-4">Nueva contraseña:</p>
        <input type="text" className="setNewPassword" required />
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Confirmar contraseña:</p>
        <input type="text" className="setNewPassword" required />
      </div>
      <button type="submit" className="newPassword mt-5">Confirmar</button>
    </form>
  </div>
</div>


     <img src={lower_shape} className="rec position-absolute bottom-0 end-0"/>
     </>   
    );
    }

export default RecoverPassword;