import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./screens/Index.jsx";
import Navbar from './components/Navbar.jsx'
import NavbarAdmin from './components/NavbarAdmin.jsx'
import Wishlist from "./screens/wishlist.jsx"
import Login from "./screens/Login.jsx"
import Shoppingcar from "./screens/shoppingcar.jsx";
import Products from "./screens/products.jsx";
import RecoverPassword from "./screens/RecoverPassword.jsx";
import ContactUs from "./screens/contactUs.jsx"
import Register from "./screens/Register.jsx";
import Footer from "./components/footer.jsx";
import PaymentProcess from "./screens/paymentProcess.jsx";
import Welcome from "./screens/private/Welcome.jsx";
import OrdersPending from "./screens/private/OrdersPending.jsx"
import Employees from "./screens/private/EmployeesAdmin.jsx"
import "./sweetalert.css" 
import UserAdmin from "./screens/private/UserAdmin.jsx";


import ProductsAdmin from "./screens/private/ProductsAdmin.jsx";


function App() {  
    return (
    <Router>
      {/*Investigation: This code doesn't display the navigation bar on the login, registration, and password recovery pages due to design. If it's on the admin pages, it displays the admin navigation bar.*/}
      {window.location.pathname !== "/Login" && 
      window.location.pathname !== "/productsAdmin" && 
      window.location.pathname !== "/recoverPassword" && 
      window.location.pathname !== "/welcome" &&
      window.location.pathname !== "/ordersPending" &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/employeesAdmin"  &&
       window.location.pathname !== "/UserAdmin" 
  ? <Navbar />
  : (
      window.location.pathname !== "/Login" &&
      window.location.pathname !== "/register" &&
      window.location.pathname !== "/recoverPassword" &&      
    <NavbarAdmin />
  )
}

      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/shoppingcar" element={<Shoppingcar/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/recoverPassword" element={<RecoverPassword/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/productsAdmin" element={<ProductsAdmin/>}/>
        <Route path="/paymentProcess" element={<PaymentProcess/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/ordersPending" element={<OrdersPending/>}/>
        <Route path="/employeesAdmin" element={<Employees/>}/>    
        <Route path="/UserAdmin" element={<UserAdmin/>}/>
      </Routes>
      {/* This code is an If-statement that checks if the current URL path is not equal to "/Login", "/register", or "/recoverPassword". If the condition is true, it shows the Footer component. */}
      {window.location.pathname !== "/Login" && window.location.pathname !== "/register" && window.location.pathname !== "/recoverPassword" && <Footer/>}
    </Router>
    );
}

export default App;
