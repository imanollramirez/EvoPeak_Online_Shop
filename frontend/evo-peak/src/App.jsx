import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./pages/Index.jsx";
import Navbar from './components/Navbar.jsx'
import Wishlist from "./pages/wishlist.jsx"
import Shoppingcar from "./pages/shoppingcar.jsx";
import Products from "./pages/products.jsx";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/shoppingcar" element={<Shoppingcar/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
