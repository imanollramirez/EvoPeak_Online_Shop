import Logo_White from '../assets/EvoPeak_White.png'
import Logo_Black from '../assets/EvoPeak_Black.png'
import "./Navbar.css"

const Navbar = () => {

return(
    <>
    <nav className="navbar p-0 fixed-top">
  <div className="container-fluid d-block mt-0 pt-0"> 
    <div className="row justify-content-between align-items-center">

      <div class="col-auto mt-0 pt-0 ps-5">
        {location.pathname === "/" || location.pathname === "/contactUs" || location.pathname === "/paymentProcess" ? <a class="navbar-brand" href="/"><img src={Logo_White} alt="Logo_White" width="180"/></a> : <a class="navbar-brand" href="/"><img src={Logo_Black} alt="Logo_White" width="180"/></a>}
      </div>

      <div className="col-auto d-flex justify-content-center mt-0 p-0">
      <ul className="navbar navbar-list text-dark">
        <li >
          {location.pathname === "/welcome" ? <a className="link-dark" href="/welcome">Inicio</a> : <a className="link-page" href="/">Inicio</a>}
        </li>

        <li >
        {location.pathname === "/products-admin" ? <a className="link-dark" href="/products-Admin">Productos</a> : <a className="link-page" href="#">Productos</a>}
        </li>

        <li >
        {location.pathname === "/orders-admin" ? <a className="link-dark" href="/orders-Admin">Pedidos</a> : <a className="link-page" href="#">Pedidos</a>}
          
        </li>


        <li >
        {location.pathname === "/users-admin" ? <a className="link-dark" href="/users-Admin">Usuarios</a> : <a className="link-page" href="#">Usuarios</a>}
          
        </li>

       
      </ul>
      </div>

      <div class="col-auto d-flex align-items-center mt-0 pt-0 pe-5">
      <div class="search-container">
    <div class="search-box">
    <i class="fa-solid fa-magnifying-glass"/>
    <input type="text" placeholder="Buscar" />
    </div>
    <i class="fa-solid fa-moon"></i>
    <a href=""><img src="https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png" class="avatar" /></a>
    </div>
      </div>

    </div>
  </div>
</nav>
    </>
)
};

export default Navbar;