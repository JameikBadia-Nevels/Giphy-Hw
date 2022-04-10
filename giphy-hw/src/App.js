import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './App.css';
import Home from './Pages/Home'
import Trending from './Pages/Trending'

function App() {
  return (
    <Router>
      <nav>
        <Link to = "/"> Home Page </Link>
        <Link to = "/trendy"> Trending Page </Link>
        <Link to = ""> </Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/trendy" element = {<Trending/>}/>
        <Route path = ""/>
        <Route path = "*"/>
      </Routes>
    </Router>
  );
}

export default App;
