import Logo_White from '../assets/EvoPeak_White.png'
import Logo_Black from '../assets/EvoPeak_Black.png'
import "./Navbar.css"
import MySwal from "sweetalert2";

import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {

  const { logout } = useAuth();

  return (
    <>
      <nav className="navbar p-0 fixed-top">
        <div className="container-fluid d-block mt-0 pt-0">
          <div className="row justify-content-between align-items-center">

            <div className="col-auto mt-0 pt-0 ps-5">
              <a className="navbar-brand" href="/welcome"><img src={Logo_Black} alt="Logo_White" width="180" /></a>
            </div>

            <div className="col-auto d-flex justify-content-center mt-0 p-0">
              <ul className="navbar navbar-list text-dark">
                <li >
                  {location.pathname === "/welcome" ? <a className="link-dark" href="/welcome">Inicio</a> : <a className="link-page" href="/welcome">Inicio</a>}
                </li>

                <li >
                  {location.pathname === "/productsAdmin" ? <a className="link-dark" href="/productsAdmin">Productos</a> : <a className="link-page" href="/productsAdmin">Productos</a>}
                </li>

                <li >
                  {location.pathname === "/ordersPending" ? <a className="link-dark" href="/ordersPending">Pedidos</a> : <a className="link-page" href="/ordersPending">Pedidos</a>}

                </li>


                <li >
                  {location.pathname === "/UserAdmin" ? <a className="link-dark" href="/UserAdmin ">Usuarios</a> : <a className="link-page" href="/UserAdmin">Usuarios</a>}

                </li>

                <li >
                  {location.pathname === "/employeesAdmin" ? <a className="link-dark" href="/employeesAdmin">Empleados</a> : <a className="link-page" href="/employeesAdmin">Empleados</a>}

                </li>


              </ul>
            </div>

            <div className="col-auto d-flex align-items-center mt-0 pt-0 pe-5">
      <div className="search-container">
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="Buscar" />
        </div>
        <i className="fa-solid fa-moon"></i>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            logout();
            MySwal.fire({
              icon: "success",
              title: "Sesión cerrada con éxito",
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          }}
        >
          <img
            src="https://img.lovepik.com/png/20231128/3d-illustration-avatar-profile-man-collection-guy-cheerful_716220_wh860.png"
            className="avatar"
            alt="User Avatar"
            style={{ cursor: "pointer" }}
          />
        </a>
      </div>
    </div>

          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;