import upper_shape from "../assets/Upper_Shape.png"
import lower_shape from "../assets/Lower_Shape.png"
import logo from "../assets/EvoPeak_Black.png"
import "../pages/Login.css"

const Login = () => {
    return (
     <>
     <img src={upper_shape} className="absolute top-0 left-0 w-full h-auto" />
     <a href="/"><img src={logo} width={220} className="logo position-absolute top-0 start-50 translate-middle"/></a>
    
     <h1 className="text-center position-absolute top-0 start-50 translate-middle-x">Inicio de Sesión</h1>
     <div className="box position-absolute top-50 start-50 translate-middle mt-5">
        <form className="form">
            <div className="input-container">
                <p className="text-start mt-4">Usuario:</p>
                <input type="text" className="username" required/>
            </div>
            <div className="input-container">
                <p className="text-start mt-4">Contraseña:</p>
                <input type="password" className="password" required/>
            </div>
            <a href="/recoverPassword" className="recoverPass"><p className=" text-end mt-3">Olvidé mi contraseña</p></a>
            <button type="submit" className="login mt-5">Iniciar Sesión</button>
            <button type="submit" className="register mt-3">Registrarse</button>
        </form>

     </div>

     <img src={lower_shape} className="position-absolute bottom-0 end-0" />
     </>   
    );
    }

export default Login;