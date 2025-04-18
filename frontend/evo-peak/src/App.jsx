import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./pages/Index.jsx";
import Navbar from './components/Navbar.jsx'
import Wishlist from "./pages/wishlist.jsx"
import Shoppingcar from "./pages/shoppingcar.jsx";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/shoppingcar" element={<Shoppingcar/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
