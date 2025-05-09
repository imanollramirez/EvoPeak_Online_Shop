import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./screens/Index.jsx";
import Navbar from './components/NavbarAdmin.jsx'
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

import Listproducts from "./screens/Listproducts.jsx";


function App() {  
    return (
    <Router>
      {/* This code is an If-statement that checks if the current URL path is not equal to "/Login", "/register", or "/recoverPassword". If the condition is true, it shows the Navbar component. */}
      {window.location.pathname !== "/Login" && window.location.pathname !== "/register" && window.location.pathname !== "/recoverPassword" && <Navbar/>}
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/shoppingcar" element={<Shoppingcar/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/recoverPassword" element={<RecoverPassword/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Listproducts" element={<Listproducts/>}/>
        <Route path="/paymentProcess" element={<PaymentProcess/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
      {/* This code is an If-statement that checks if the current URL path is not equal to "/Login", "/register", or "/recoverPassword". If the condition is true, it shows the Footer component. */}
      {window.location.pathname !== "/Login" && window.location.pathname !== "/register" && window.location.pathname !== "/recoverPassword" && <Footer/>}
    </Router>
    );
}

export default App;
