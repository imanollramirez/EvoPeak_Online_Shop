import { BrowserRouter as Router, Routes, Route } from "react-router";
import Index from "./pages/index.jsx";
import Navbar from './components/Navbar.jsx';
import Wishlist from "./pages/wishlist.jsx";
import Login from "./pages/Login.jsx";

function App() {  
    return (
    <Router>
     {window.location.pathname !== "/Login" && <Navbar/>}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
