import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./pages/index.jsx";
import Navbar from './components/Navbar.jsx'
import Wishlist from "./pages/wishlist.jsx"

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
