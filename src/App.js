import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/Projects/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
      </Router>
  );
}

export default App;
