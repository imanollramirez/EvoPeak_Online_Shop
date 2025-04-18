import Logo from '../assets/EvoPeak_White.png'
import WishList from '../assets/WishList_Icon.png'
import ShoppingCart from '../assets/ShoppingCart_Icon.png'
import "./Navbar.css"

const Navbar = () => {

return(
    <>
    <nav className="navbar p-0 fixed-top">
  <div class="container-fluid d-block mt-0 pt-0"> 
    <div class="row justify-content-between align-items-center">

      <div class="col-auto mt-0 pt-0 ps-5">
      <a class="navbar-brand" href="/"><img src={Logo} alt="Logo" width="180"/></a>
      </div>

      <div class="col-auto d-flex justify-content-center mt-0 p-0">
      <ul className="navbar navbar-list">
        <li >
          <a className="link-page-active" href="/">Inicio</a>
        </li>

        <li >
          <a className="link-page" href="/products">Productos</a>
        </li>

        <li >
          <a className="link-page" href="#">Contáctanos</a>
        </li>

       
      </ul>
      </div>

      <div class="col-auto d-flex align-items-center mt-0 pt-0 pe-5">
      <a href="/Login"><button className="btn-login">Iniciar Sesión</button></a>
      <a href="/wishlist"><img src={WishList} width="35"/></a>
      <a href="/shoppingcar"><img src={ShoppingCart} width="35"/></a>
      </div>

    </div>
  </div>
</nav>
    </>
)
};

export default Navbar;