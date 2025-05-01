import Logo_White from '../assets/EvoPeak_White.png'
import Logo_Black from '../assets/EvoPeak_Black.png'
import WishList_White from '../assets/WishList_Icon_White.png'
import WishList_Black from '../assets/WishList_Icon_Black.png'
import ShoppingCart_White from '../assets/ShoppingCart_Icon_White.png'
import ShoppingCart_Black from '../assets/ShoppingCart_Icon_Black.png'
import "./Navbar.css"

const Navbar = () => {

return(
    <>
    <nav className="navbar p-0 fixed-top">
  <div class="container-fluid d-block mt-0 pt-0"> 
    <div class="row justify-content-between align-items-center">

      <div class="col-auto mt-0 pt-0 ps-5">
        {location.pathname === "/" || location.pathname === "/contactUs" || location.pathname === "/paymentProcess" ? <a class="navbar-brand" href="/"><img src={Logo_White} alt="Logo_White" width="180"/></a> : <a class="navbar-brand" href="/"><img src={Logo_Black} alt="Logo_White" width="180"/></a>}
      </div>

      <div class="col-auto d-flex justify-content-center mt-0 p-0">
      <ul className="navbar navbar-list text-dark">
        <li >
          {location.pathname=== "/" ? <a className="link-page-active" href="/">Inicio</a> : <a className="link-page" href="/">Inicio</a>}
        </li>

        <li >
        {location.pathname === "/products" ? <a className="link-page-active text-dark" href="/products">Productos</a> : <a className="link-page" href="/products">Productos</a>}
        </li>

        <li >
        {location.pathname === "/contactUs" ? <a className="link-page-active" href="/contactUs">Contáctanos</a> : <a className="link-page" href="/contactUs">Contáctanos</a>}
          
        </li>

       
      </ul>
      </div>

      <div class="col-auto d-flex align-items-center mt-0 pt-0 pe-5">
      {location.pathname === "/" || location.pathname === "/contactUs" || location.pathname === "/paymentProcess" ? <a href="/Login"><button className="btn-login ">Iniciar Sesión</button></a> : <a href="/Login"><button className="btn-login text-light bg-black">Iniciar Sesión</button></a>}
      {location.pathname === "/" || location.pathname === "/contactUs" || location.pathname === "/paymentProcess" ?  <a href="/wishlist"><img src={WishList_White} width="35"/></a> : <a href="/wishlist"><img src={WishList_Black} width="35"/></a>}
      {location.pathname === "/" || location.pathname === "/contactUs" || location.pathname === "/paymentProcess" ?  <a href="/shoppingcar"><img src={ShoppingCart_White} width="35"/></a> : <a href="/shoppingcar"><img src={ShoppingCart_Black} width="35"/></a>}
      </div>

    </div>
  </div>
</nav>
    </>
)
};

export default Navbar;