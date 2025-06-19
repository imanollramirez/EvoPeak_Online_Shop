import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import Index from "./screens/Index.jsx";
import Navbar from './components/Navbar.jsx';
import NavbarAdmin from './components/NavbarAdmin.jsx';
import Wishlist from "./screens/wishlist.jsx";
import Login from "./screens/Login.jsx";
import Shoppingcar from "./screens/shoppingcar.jsx";
import Products from "./screens/products.jsx";
import RecoverPassword from "./screens/RecoverPassword.jsx";
import ContactUs from "./screens/contactUs.jsx";
import Register from "./screens/Register.jsx";
import Footer from "./components/footer.jsx";
import PaymentProcess from "./screens/paymentProcess.jsx";
import Welcome from "./screens/private/Welcome.jsx";
import OrdersPending from "./screens/private/OrdersPending.jsx";
import Employees from "./screens/private/EmployeesAdmin.jsx";
import UserAdmin from "./screens/private/UserAdmin.jsx";
import ProductsAdmin from "./screens/private/ProductsAdmin.jsx";
import "./sweetalert.css";
import { AuthProvider } from "./context/AuthContext";

function NavbarSelector() {
  const location = useLocation();
  const path = location.pathname;

  // Rutas donde NO mostramos ningún navbar
  const noNavbarPaths = ["/Login", "/register", "/recoverPassword"];

  if (noNavbarPaths.includes(path)) {
    return null; // No navbar en Login, Register ni RecoverPassword
  }

  // Rutas admin donde mostramos NavbarAdmin
  const adminPaths = [
    "/productsAdmin",
    "/welcome",
    "/ordersPending",
    "/employeesAdmin",
    "/UserAdmin",
  ];

  if (adminPaths.includes(path)) {
    return <NavbarAdmin />;
  }

  // En cualquier otra ruta mostramos el Navbar normal
  return <Navbar />;
}

function FooterSelector() {
  const location = useLocation();
  const path = location.pathname;

  // Mismas rutas donde no mostramos footer
  const noFooterPaths = ["/Login", "/register", "/recoverPassword"];

  if (noFooterPaths.includes(path)) {
    return null;
  }
  return <Footer />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavbarSelector />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shoppingcar" element={<Shoppingcar />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/productsAdmin" element={<ProductsAdmin />} />
          <Route path="/paymentProcess" element={<PaymentProcess />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/ordersPending" element={<OrdersPending />} />
          <Route path="/employeesAdmin" element={<Employees />} />
          <Route path="/UserAdmin" element={<UserAdmin />} />
        </Routes>
        <FooterSelector />
      </AuthProvider>
    </Router>
  );
}

export default App;
