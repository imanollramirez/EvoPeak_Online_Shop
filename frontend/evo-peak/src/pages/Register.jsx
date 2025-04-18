import upper_shape from "../assets/Upper_Shape.png"
import lower_shape from "../assets/Lower_Shape.png"
import logo from "../assets/EvoPeak_Black.png"
import "../pages/Register.css"

const Register = () => {
    return (
     <>
     <img src={upper_shape} className="absolute top-0 left-0 w-full h-auto" />
     <a href="/"><img src={logo} width={220} className="logo position-absolute top-0 start-50 translate-middle"/></a>
    
     <h1 className="text-center position-absolute top-0 start-50 translate-middle-x">Inicio de Sesión</h1>
     <div className="box position-absolute top-50 start-50 translate-middle mt-5">
        
        <div className="form-register">
        <form className="form">
  <div className="row">
    <div className="col-md-6">
      <div className="input-container">
        <p className="text-start mt-4">Nombres:</p>
        <input type="text" className="username" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Apellidos:</p>
        <input type="text" className="lastname" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Email:</p>
        <input type="text" className="email" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Teléfono:</p>
        <input type="text" className="phone" required/>
      </div>
    </div>

    <div className="col-md-6">
      <div className="input-container">
        <p className="text-start mt-4">Contraseña:</p>
        <input type="text" className="password" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Confirmar Contraseña:</p>
        <input type="text" className="password" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Foto de perfil:</p>
        <img className="profile-pic" required/>
        <button className="upload-pic mt-3">Subir foto</button>
      </div>
    </div>
  </div>

  <div className="text-center">
    <button type="submit" className="register mt-5">Registrarse</button>
  </div>
</form>

        </div>
    
     </div>

     <img src={lower_shape} className="position-absolute bottom-0 end-0" />
     </>   
    );
    }

export default Register;