<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Index from "./pages/index.jsx";
import Navbar from './components/Navbar.jsx';
import Wishlist from "./pages/wishlist.jsx";
import Login from "./pages/Login.jsx";
=======
import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./pages/Index.jsx";
import Navbar from './components/Navbar.jsx'
import Wishlist from "./pages/wishlist.jsx"
import Shoppingcar from "./pages/shoppingcar.jsx";
import Products from "./pages/products.jsx";
>>>>>>> master

function App() {  
    return (
    <Router>
     {window.location.pathname !== "/Login" && <Navbar/>}
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Index />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />
=======
        <Route path="/" element={<Index/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/shoppingcar" element={<Shoppingcar/>}/>
        <Route path="/products" element={<Products/>}/>
>>>>>>> master
      </Routes>
    </Router>
  );
}

export default App;
