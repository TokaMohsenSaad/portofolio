import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects/Project";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
   
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    
      
      </Routes>
      </Router>
  );
}

export default App;
