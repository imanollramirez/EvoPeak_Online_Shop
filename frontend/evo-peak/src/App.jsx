import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./pages/Index.jsx";
import Navbar from './components/Navbar.jsx'
import Wishlist from "./pages/wishlist.jsx"
import Login from "./pages/Login.jsx"
import Shoppingcar from "./pages/shoppingcar.jsx";
import Products from "./pages/products.jsx";
import RecoverPassword from "./pages/RecoverPassword.jsx";
import ContactUs from "./pages/contactUs.jsx"
import Register from "./pages/Register.jsx";


function App() {  
    return (
    <Router>
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
      </Routes>
    </Router>
    );
}

export default App;
