import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Aboutme from './pages/Aboutme';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Aboutme/>
        <Skills/>
        <Project/>
        <Contact/>
          <Routes>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
