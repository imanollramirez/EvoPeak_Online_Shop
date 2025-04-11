import { BrowserRouter as Router, Routes, Route} from "react-router";
import Index from "./pages/index.jsx";
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Index/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
