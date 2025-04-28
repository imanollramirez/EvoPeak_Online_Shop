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
     <div className="box-register position-absolute top-50 start-50 translate-middle">
        
        <div className="form-register">
        <form className="form">
  <div className="row">
    <div className="col-md-6">
      <div className="input-container">
        <p className="text-start mt-4">Nombres:</p>
        <input type="text" placeholder="Nombre de usuario" className="username" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Apellidos:</p>
        <input type="text" placeholder="Apellidos del usuario" className="lastname" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Email:</p>
        <input type="email" placeholder="Correo Electrónico" className="email" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Teléfono:</p>
        <input type="text" placeholder="Número de Teléfono" className="phone" required/>
      </div>
    </div>

    <div className="col-md-6">
      <div className="input-container">
        <p className="text-start mt-4">Contraseña:</p>
        <input type="password" placeholder="Minimo 8 carácteres" className="password" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">DUI:</p>
        <input type="text" placeholder="xxxxxxxx-x" className="dui" required/>
      </div>
      <div className="input-container">
        <p className="text-start mt-4">Foto de perfil:</p>
        <img className="profile-pic" required/>
        <button className="upload-pic mt-3">Subir foto</button>
      </div>
    </div>
  </div>

  <div>
    <button type="submit" className="register mt-5 ">Registrarse</button>
  </div>
</form>

        </div>
    
     </div>

     <img src={lower_shape} className="position-absolute bottom-0 end-0" />
     </>   
    );
    }

export default Register;