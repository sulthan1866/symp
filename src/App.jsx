import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home";
import Events from "./Event/Event";
import Contact from "./components/Contact";
import About from "./components/About/About";
import New from "./components/new/New";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<New />} />
      </Routes>
    </Router>
    {/* <Home /> */}
  </>
);
export default App;
